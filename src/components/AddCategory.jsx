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

        <form onSubmit={ onSubmit }>

            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue } 
                onChange={onInputChange}
            />

        </form>

  )
}
