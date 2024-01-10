import { Button } from "@mui/material"
import React from "react"
import { useGlobalContext } from "../context"

const Favorites = () => {
    const { favorites, deleteFavorite,selectMeal } = useGlobalContext()
    return (
        <div className="main-con">
            <h1>FAVORITES</h1>

            <div className="favorites-container">
                {favorites.map((meal) => {
                    return (
                        <React.Fragment key={meal.idMeal}>
                            <div className="fav-container">
                                <img src={meal.strMealThumb} alt="meal-img" className="fav-img-style" onClick={()=>selectMeal(meal.idMeal,true)}/>
                                <Button onClick={()=>deleteFavorite(meal.idMeal)} variant="contained" className="delete-btn">remove</Button>
                            </div>
                        </React.Fragment>
                    )
                })}

            </div>
        </div>
    )
}
export default Favorites