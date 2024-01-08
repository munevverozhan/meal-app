import { useContextProvider } from "../context"
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Skeleton, TextField, Typography } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import '../assets/style.css'
import { Search } from "@mui/icons-material"


const Meals = () => {
    const { meals, loading } = useContextProvider()

    console.log(loading)
    return (
        <>
            <div className="header">
                <TextField id="outlined-basic" label="Search meal" variant="outlined" />
                <Button variant="contained" startIcon={<Search />}>SEARCH</Button>
                <Button variant="contained" startIcon={<AutoAwesomeIcon />}>SUPRISE ME!</Button>
            </div>
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