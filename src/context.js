import { createContext, useContext, useState, useEffect } from 'react'
import { share } from "./share"
const allMealsUrl = 'search.php?s='
const randomMealUrl = 'random.php'

export const context = createContext();

const Provider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favorites,setFavorites]=useState([])

    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            const response = await share.get(url);
            if (response?.data?.meals) {
                setMeals(response);
            }
            else {
                setMeals([])
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])

    useEffect(() => {
        if (!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    const setSearchTermFunction = (text) => {
        setSearchTerm(text)
    }
    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }
    const selectMeal = (idMeal, favoriteMeal) => {
        let meal;
        meal = (meals?.data?.meals).find((meal) => meal.idMeal === idMeal)
        setSelectedMeal(meal)
        setShowModal(true)
        console.log(meal)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <context.Provider value={{ meals, loading, setSearchTermFunction, fetchRandomMeal, showModal, selectMeal, selectedMeal ,handleClose}}>
                {children}
            </context.Provider>
        </>
    )
}

export const useGlobalContext = () => {
    return useContext(context)
}

export default Provider