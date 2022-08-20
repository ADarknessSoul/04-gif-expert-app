import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { GifLabels } from './GifLabels';

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>

    <div className='historial'>

    <GifLabels label={category}/>

    </div>

    <div className='sombra'>

          
      <h3>{category}</h3>
      

      {
        
        isLoading && (<h2>Cargando...</h2>) //Ternario simplificado
        
      }

      <div className='card-grid'>
        { 

          images.map( ( image ) => (
            <GifGridItem
              key={image.id}
              { ...image } 
              // title={image.title}
              // url={image.url}
             />
          ))
          
        }
      </div>

    </div>

      


    </>
  )

}
