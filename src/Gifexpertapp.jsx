import { useEffect } from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { GifInstructions } from "./components/GifInstructions";
import { GifLabels } from "./components/GifLabels";
import { Header } from "./components/Header";



export const Gifexpertapp = () => {

    /*Fijar las etiquetas en la parte superior de la pantalla */
    useEffect(() => {
      
        const labels = document.querySelector('.historial');
        const main = document.querySelector('main');
        const body = document.querySelector('body');

        window.addEventListener('scroll', function() {

            if(main.getBoundingClientRect().top < 0) {
                labels.classList.add('fijo');
                body.classList.add('body-scroll');
            } else {
                labels.classList.remove('fijo');
                body.classList.remove('body-scroll');
            }


        });

    }, [])
    

    /*useState para declarar las categorias que busca la aplicación */
    const [categories, setCategories] = useState(['gif']);


    /*Se busca si la entrada del input corresponde a una categoría existente, y sino, se agrega en el state */
    const onAddCategory = (newCategory) => {
        
        const arrayToLowerCase = categories.map( category => category.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "").replace(' ', '').toLowerCase());    

        if( arrayToLowerCase.includes(newCategory.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "").replace(' ', '').toLowerCase()) ) return;

        setCategories([newCategory, ...categories]);

    }

    
    /*Se busca la categoría que se busca eliminar en el state y se reescribe */
    const onDeleteCategory = (category) => {

        const arrayToLowerCase = categories.map( category => category.toLowerCase());

        const newState = arrayToLowerCase.filter(label => label != category);
        setCategories(newState);

    }

  return (

    <>
    {/* Título */}

        <Header title={"GifExpertApp"}/>

    {/* Instrucciones */}

        <GifInstructions/>

    {/* Input */}

        <AddCategory 
            onNewCategory = {value => onAddCategory(value)}
        />
    
    {/* Etiquetas de Gifs */}

        <div className='historial'>

            {

                categories.map( category => (
                    <GifLabels key={category} label={category} onClickX = {value => onDeleteCategory(value)}/>
                ))

            }        

        </div>

    {/* Listado de Gifs */}

        <main className="contenedor">

            { 
            categories.map( category => (
                <GifGrid key={category} category={category}/>
                ))
                
            }

        </main>

        <footer className="footer">

            <p>© 2022 Gerardo Vasquez Ordaz. Todos los derechos reservados. </p>

        </footer>
    </>
        
  )
}
