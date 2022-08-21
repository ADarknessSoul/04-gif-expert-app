import { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { GifsHeader } from './GifsHeader';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

  const [newLimit, setNewLimit] = useState(3);

  const { images, isLoading } = useFetchGifs(category, newLimit);

  /*Se asigna el nuevo valor del limite al momento de extraer los gifs*/
  const onNewFetch = (limit) => {

    setNewLimit(limit);

  }

  return (

    <>

    <div className='gifs sombra'>

      {/* Título y botones de los Gifs */}
      <section className='gifs__cabecera'>

        <GifsHeader category={category} onClickButton = {value => onNewFetch(value) }/>

      </section>      
      
      {
        
        isLoading && (<h2>Cargando...</h2>) //Ternario simplificado
        
      }

      {/* Diseño de gifs */}
      <section className='card-grid'>
        { 

          images.map( ( image ) => (
            <GifGridItem
              key={image.id}
              { ...image } 
             />
          ))
          
        }
      </section>

    </div>

    </>
  )

}

GifGrid.propTypes = {

  category: PropTypes.string.isRequired

}