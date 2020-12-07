import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
    children,
    isSignInWithGoogle,
    inverted,
    ...otherBtnProps
}) => {
    return (
        <button
            className={`
            ${inverted ? 'inverted' : ''} 
            ${isSignInWithGoogle ? 'sign-in-with-google' : ''} 
            custom-button`}
            {...otherBtnProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
