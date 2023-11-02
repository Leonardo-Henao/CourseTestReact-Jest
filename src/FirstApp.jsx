import './global.css';
import PropTypes from 'prop-types';

const nombre = 'Leonardo';

const mensaje = {
  remitente: 'Juan Pablo',
  texto: 'Hola como estas',
  hora: '12:30 PM',
};

const obtenerMensaje = ({ remitente, texto, hora }) => {
  return `Mensaje de ${remitente}: ${texto} - a las ${hora}`;
};

const FirstApp = ({ titulo, numeros }) => {
  //   if (!titulo) throw new Error('Titulo no debe estas vació');

  return (
    <>
      <h1>Mi Primera aplicación con React!</h1>
      <h2>{titulo}</h2>
      <p>{5 + numeros}</p>
      <p>Soy un subtitulo de {nombre}</p>
      <div>{obtenerMensaje(mensaje)}</div>
    </>
  );
};

export default FirstApp;

// Define si es requerido y de que tipo es la prop
// para utilizar esta función es necesario instalar [yarn add prop-types]
FirstApp.propTypes = {
  titulo: PropTypes.string.isRequired,
  numeros: PropTypes.number,
};

// Asignar props por defecto si no se pasan al momento de llamar el componente
FirstApp.defaultProps = {
  // titulo: 'No hay titulo',
  numeros: 1,
};
