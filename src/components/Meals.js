import { useGlobalContext } from "../context"
import { Card, CardActions, CardHeader, CardMedia, IconButton } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import '../assets/style.css'

const Meals = () => {
    const { meals, loading, selectMeal } = useGlobalContext()
    console.log(meals)
    console.log(loading)
    return (
        <>
            <div className="favorites-container">
                <h3>Favorites</h3>
                <h3>Favorites</h3>

            </div>

            {
                loading ? <span className="loader"></span> :
                    <div className="container">
                        {meals.length < 1 ? <h1>veri yok</h1> :
                            (meals?.data?.meals)?.map((item) => {
                                return (
                                    <Card sx={{ maxWidth: 345 }} key={item.idMeal} className="card-style">
                                        <CardHeader className="title-style"
                                            title={item.strMeal}
                                        />
                                        <CardMedia className="img-style"
                                            sx={{ height: 200 }}
                                            image={item.strMealThumb}
                                            title={item.strMeal}
                                            onClick={() => selectMeal(item.idMeal)}
                                        />

                                        <CardActions>
                                            <IconButton>
                                                <FavoriteIcon style={{ color: "white" }} />
                                            </IconButton>
                                        </CardActions>
                                    </Card >
                                )
                            })
                        }
                    </div>
            }
        </>
    )

}
export default Meals