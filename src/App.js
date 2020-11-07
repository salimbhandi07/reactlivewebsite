import React, {useState, useEffect} from "react";
import "./App.css"
import Header from "./components/Header"
import Recipe from "./components/Recipes"
import Axios from 'axios'


const App = () => {
    

    const[search, setSearch] = useState("chiken")
    const[recipes, setRecipes] = useState([])

    const APP_ID ="eb5fba07"
    const APP_KEY="f5898751a99f9d870ec1912c12a53f7b"

    useEffect(() => {
         getRecipes()
        
    }, [])

    const getRecipes = async () =>{
        const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        setRecipes(res.data.hits)

    }

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const onSearchClick = () =>{
        getRecipes()
    }

    return(
        <div className="App">
            <Header search={search} 
            onInputChange={onInputChange}
            onSearchClick={onSearchClick}/>
           
            <div className="container">   
             <Recipe recipes={recipes} />
            </div>
         </div>
    )
}
export default App;