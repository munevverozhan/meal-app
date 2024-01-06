import { useEffect, useState } from "react"
import { useContextProvider } from "../context"
import {share} from "../share"


const Meals = () => {
    const context = useContextProvider()
    console.log(context)
    const [data, setData] = useState()

    useEffect(() => {
        share.get('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&').then((response) => setData(response))
    }, [])
    console.log(data?.data?.timelines?.daily)
    return (
        <>
            <h1>Meals</h1>
           {
            (data?.data?.timelines?.daily)?.map(item =>{
               return <li key={(item.time)}>{Object.entries(item.values).map(item =>{return <li key={item.time}>{item}</li>}) }</li>
            })
           } 
        </>
    )
}
export default Meals