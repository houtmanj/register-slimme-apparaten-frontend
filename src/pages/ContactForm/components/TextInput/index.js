import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export const TextInput = (props) => {
  const { name, display, placeholder } = props;
  const render = ({ handler }) => (
    <div className="rij mode_input text rij_verplicht">
      <div className="label">
        <label htmlFor={`form${name}`}>{display}</label>
      </div>

      <div className="invoer">
        <input name="" id={`form${name}`} value="" className="input" type="text" {...handler()} placeholder={placeholder} />
      </div>

    </div>
  );

  render.defaultProps = {
    touched: false,
    placeholder: ''
  };

  render.propTypes = {
    handler: PropTypes.func.isRequired,
  };
  return render;
};

export default TextInput;