import { createContext, useContext, useState, useEffect } from 'react'
import { share } from "./share"
const allMealsUrl = 'search.php?s=k'
const randomMealUrl = 'random.php'


export const context = createContext();

const Provider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            const response = await share.get(url);
            if (response?.data?.meals) {
                setMeals(response);
            }
            else{
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

    return (
        <>
            <context.Provider value={{ meals, loading }}>
                {children}
            </context.Provider>
        </>
    )
}

export const useContextProvider = () => {
    return useContext(context)
}

export default Provider