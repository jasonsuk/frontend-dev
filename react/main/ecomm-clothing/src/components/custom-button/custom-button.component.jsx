import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherBtnProps }) => {
    return (
        <button className="custom-button" {...otherBtnProps}>
            {children}
        </button>
    );
};

export default CustomButton;
