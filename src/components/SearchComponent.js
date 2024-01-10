import { useGlobalContext } from "../context";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchComponent = () => {
    const { setSearchTermFunction,fetchRandomMeal } = useGlobalContext()
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text){
            setSearchTermFunction(text)
        }
    }
    const handleRandomMeal = ()=>{
        setSearchTermFunction('');
        setText('');
        fetchRandomMeal();
    }
    return (
        <>
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <TextField id="otulined-basic" type="text" value={text} onChange={handleChange} label="Search meal" variant="outlined"/>
                    <Button type="submit" variant="contained" startIcon={<Search/>}>SEARCH</Button>
                    <Button type="button" variant="contained" startIcon={<AutoAwesomeIcon />} onClick={handleRandomMeal}>SUPRISE ME!</Button>
                </form>
            </div>
        </>
    )
}
export default SearchComponent