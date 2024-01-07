import React, { useEffect, useState } from "react"
import { useContextProvider } from "../context"
import { share } from "../share"


const Meals = () => {
    const context = useContextProvider()
    const [data, setData] = useState()
    const allMealsUrl = 'api/json/v1/1/search.php'
    const randomMealUrl='api/json/v1/1/random.php'

   
    const fetchData = async () => {
        try {
            const response = await share.get(randomMealUrl)
            setData(response)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(data?.data?.results)
    return (
        <>
            <h1>Meals</h1>
            {
                (data?.data?.results)?.map((item, index) => {
                    return <React.Fragment key={index}>
                        <div> Name: {item.name.first}</div>
                        <div>Age: {item.dob.age}</div>
                        <div>Email: {item.email}</div>
                        <div>Picture: {item.picture.large}</div>
                        <div>Phone: {item.phone}</div>
                    </React.Fragment>
                })
            }
        </>
    )
}
export default Meals