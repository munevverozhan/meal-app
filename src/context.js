import { createContext, useContext, useState, useEffect } from 'react'
import { share } from "./share"
const allMealsUrl = 'search.php?s='
const randomMealUrl = 'random.php'

export const context = createContext();
const getFavoritesFromLocalStorage = () => {
    let favorites = localStorage.getItem('favorites')
    if (favorites) {
        favorites = JSON.parse(localStorage.getItem('favorites'))
    }
    else {
        favorites = []
    }
    return favorites
}

const Provider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())

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
        if (favoriteMeal) {
            meal = favorites.find((meal) => meal.idMeal === idMeal)
        } else {
            meal = (meals?.data?.meals).find((meal) => meal.idMeal === idMeal)
        }
        setSelectedMeal(meal)
        setShowModal(true)
        console.log(meal)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    const changeBtnColor = () => {
        const favIcons = document.querySelectorAll('#fav-icon')
        for (const icon of favIcons) {
            icon.addEventListener('click', () => {
                icon.style.color = 'red';
            })
        }
    }

    const addToFavorites = (idMeal) => {
        const meal = (meals?.data?.meals).find((meal) => meal.idMeal === idMeal)
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
        if (alreadyFavorite) return
        const updateFavorites = [...favorites, meal]
        setFavorites(updateFavorites)
        localStorage.setItem('favorites', JSON.stringify(updateFavorites))
        changeBtnColor()
    }

    const deleteFavorite = (idMeal) => {
        const updateFavorites = favorites.filter((meal) => meal.idMeal !== idMeal)
        setFavorites(updateFavorites)
        localStorage.setItem('favorites', JSON.stringify(updateFavorites))
    }
    console.log('fav', favorites)




    return (
        <>
            <context.Provider value={{ meals, loading, setSearchTermFunction, fetchRandomMeal, showModal, selectMeal, selectedMeal, handleClose, addToFavorites, deleteFavorite, favorites }}>
                {children}
            </context.Provider>
        </>
    )
}

export const useGlobalContext = () => {
    return useContext(context)
}

export default Provider