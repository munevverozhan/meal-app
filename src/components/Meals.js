import { useContextProvider } from "../context"
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import '../assets/style.css'

const Meals = () => {
    const { meals } = useContextProvider()

    return (
        <>
            <h1>Meals</h1>

            {
                (meals?.data?.meals)?.map((item) => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={item.idMeal}>
                            <CardHeader
                                title={item.strMeal}
                            />
                            <CardMedia
                                sx={{ height: 200}}
                                image={item.strMealThumb}
                                title={item.strMeal}
                            />
                            <CardContent>
                                <Typography>
                                    {item.strInstructions}
                                </Typography>
                            </CardContent>
                        </Card >
                    )

                })
            }
        </>
    )
}
export default Meals