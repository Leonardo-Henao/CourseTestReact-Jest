import { useState } from 'react';
import PropTypes from 'prop-types';

let valueDefault = 0;

const CounterApp = ({ value }) => {
  const [contador, setContador] = useState(value);

  valueDefault = value;

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  const resetContador = () => {
    setContador(valueDefault);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {contador} </h2>
      <button onClick={aumentarContador}> +1 </button>
      <button onClick={disminuirContador}> -1 </button>
      <button onClick={resetContador}> Reset </button>
    </>
  );
};

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
