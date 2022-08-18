import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { Header } from "./components/Header";

export const Gifexpertapp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    // console.log(categories);

    const onAddCategory = (newCategory) => {
        
        const arrayToLowerCase = categories.map( category => category.toLowerCase());    

        if( arrayToLowerCase.includes(newCategory.toLowerCase()) ) return;

        // setCategories( oldArray => [...oldArray, 'OMORI']);
        setCategories([newCategory, ...categories]);

    }

  return (

    <>
    {/* Título */}

    <Header title={"GifExpertApp"}/>

    {/* Input */}

        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory = {value => onAddCategory(value)}
        />

    {/* Listado de Gifs */}

        { 
            categories.map( category => (
                <GifGrid key={category} category={category}/>
            ))
            
        }

    </>
        
  )
}
