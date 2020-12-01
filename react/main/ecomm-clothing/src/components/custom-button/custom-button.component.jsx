import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isSignInWithGoogle, ...otherBtnProps }) => {
    return (
        <button
            className={`${
                isSignInWithGoogle ? 'sign-in-with-google ' : ''
            }custom-button`}
            {...otherBtnProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
