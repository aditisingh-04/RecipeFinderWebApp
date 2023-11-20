import React from "react";
import Header from './components/header/Header'
import MainBody from './components/mainbody/MainBody'
import SearchRecipe from "./components/searchrecipe/SearchRecipe";

 const App = () => {
    return (
        <>
            <Header />
            <MainBody />
            <SearchRecipe />
        </>
    )
 }
export default App