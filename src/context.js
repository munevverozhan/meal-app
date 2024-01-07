import { createContext, useContext, useState ,useEffect} from 'react'
import { share } from "./share"
const allMealsUrl = 'search.php?s=k'
const randomMealUrl = 'random.php'


export const context = createContext();

const Provider = ({ children }) => {
    const [meals, setMeals] = useState([])
   
    const fetchMeals = async (url) => {
        try {
            const response = await share.get(url)
            setMeals(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])

    return (
        <>
            <context.Provider value={{meals}}>
                {children}
            </context.Provider>
        </>
    )
}

export const useContextProvider = () => {
    return useContext(context)
}

export default Provider