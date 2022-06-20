import React from "react";

import './button.style.scss';

const CustomButton = ({children, onClick}) => {
    return (
        <button 
            onClick={onClick}
            className='button'>
            {children}
        </button>
    )
};

export default CustomButton;