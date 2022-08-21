import PropTypes from 'prop-types';

export const GifLabels = ({label, onClickX}) => {

  /*Se llama a la función de callback y le envía el título de la etiqueta */
  const deleteLabel = () => {

    const labelLowerCase = label.toLowerCase();
    onClickX(labelLowerCase);

  };

  /*Se busca el id del título para compararlo con la etiqueta y desplazar el scroll hasta la sección correspondiente */
  const positionScreen = (event) => {

    event.preventDefault();

    const label = event.target.innerHTML;

    const labelWithoutSpaces = label.replaceAll(' ', '');
    
    const h3 = document.querySelector('#' + labelWithoutSpaces);

    h3.scrollIntoView({behavior: "smooth"});

  }

  return (

    <>

      {/* Etiquetas */}

      <div className="historial--redondear">

          <div className="contenido-label">

              <p onClick={ event => positionScreen(event) }>{label}</p>
              <img onClick={ deleteLabel }  src="src\images\x-symbol.svg" alt="símbolo de x" />

          </div>

      </div>

    </>

  )
}

GifLabels.propTypes = {

  label: PropTypes.string.isRequired

}

