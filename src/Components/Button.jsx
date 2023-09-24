// Button.js
import React from 'react';
import './Button.css';

function Button(props) {
  const { label, tabValue, isActive, onClick } = props;

  const handleClick = () => {
    onClick(tabValue);
  };

  const buttonClassName = isActive ? 'button active' : 'button';

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
