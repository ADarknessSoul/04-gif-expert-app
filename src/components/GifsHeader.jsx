import { useEffect } from "react";
import { useState } from "react"
import PropTypes from 'prop-types';

export const GifsHeader = ({category, onClickButton}) => {

    const [limit, setLimit] = useState(3);

      /*useEffect para esperar el resultado asíncrono del useState*/
      useEffect(() => {
        
         onClickButton(limit);

      }, [limit])
      
      /*Se actualiza el state con un valor incrementado del límite */
     const maxLimitAdd = () => {

      if(limit <= 8) {

         setLimit( (c) => c + 1);

      }
         
     }

     /*Se actualiza el state con un valor decrementado del límite */
     const maxLimitDecrease = () => {

         if(limit >= 2) {
            setLimit( (c) => c - 1);
         }

     }


  return (
    <>


         {/* Header del Gif */}
        <button onClick={maxLimitDecrease} className="button button-red">-1</button>
        <h3 id={category.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "").replace(' ', '')} aria-label="heading3">{category}</h3> 
        <button onClick={maxLimitAdd} className="button button-green">+1</button>

    </>
  )
}

GifsHeader.propTypes = {

   category: PropTypes.string.isRequired

}