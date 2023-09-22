import React from 'react';
import './Button.css';

function Button(props) {
  const { label, tabValue, setActiveItem } = props;

  const handleButtonClick = () => {
    // Call setActiveItem to set the active item label and tab value
    setActiveItem(label, tabValue);
    // alert(`Button for ${label} clicked!`);  
  };

  return (
    <button className='button' onClick={handleButtonClick}>
      {label}
    </button>
  );
}

export default Button;
