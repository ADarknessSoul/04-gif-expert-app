import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('');
  
    const onInputChange = ({target}) => {

        // console.log(target.value);

        setInputValue( target.value );

    }

    const onSubmit = (event) => {

        event.preventDefault();
        const newInputValue = inputValue.trim();
        // console.log(inputValue);

        if(newInputValue.length < 1) return;

        // setCategories(oldArray => [ inputValue, ...oldArray ]);
        onNewCategory(newInputValue);
        setInputValue('');

    }

    return (

        <>
            <div className="contenedor input">

                <div className="input__title">

                    <h2>Busqueda de GIFS</h2>

                    <img src="src\images\thunder.svg" alt="Rayo" />

                </div>

                <div className="input__form--centrar">

                        <form onSubmit={ onSubmit }>

                            <div className="input__busqueda">

                                <input 
                                    className="input__busqueda--1"
                                    type="text" 
                                    placeholder="Buscar gifs" 
                                    value={ inputValue } 
                                    onChange={onInputChange}
                                    />

                                <input 
                                    className="input__busqueda--2"
                                    src="src\images\busqueda.svg" 
                                    type="image"
                                 />

                            </div>

                        </form>

                </div> {/*input__form--centrar */}

            </div> {/*input */}

        </>
  )
}
