import PropTypes from 'prop-types';

export const Header = ({title}) => {

  return (
    
    <>

        <header className="header">

        <div className="contenido-header">

            <img src="\images\logo2.gif" alt="Logo" />

            <h1>{title}</h1>

        </div>



        </header>    
    
    </>

  )
}

Header.propTypes = {

  title: PropTypes.string.isRequired

}

Header.defaultProps = {

  title: "GifExpertApp"

}
