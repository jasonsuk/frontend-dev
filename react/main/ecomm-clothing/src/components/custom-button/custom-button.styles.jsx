import styled, { css } from 'styled-components';

const googleSiginStyles = css`
    background: #4285f4;
    color: white;
    border: none;

    &:hover {
        background: #357ae3;
        border: none;
    }
`;

const invertedStyles = css`
    background-color: white;
    color: black;
    border: none;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid white;
    }
`;

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

// styled-components can leverage css + js
// pure javascript helper function to replace untidy ternary operator @custom-button.component
const getButtonStyles = (props) => {
    if (props.isSignInWithGoogle) {
        return googleSiginStyles;
    }

    return props.inverted ? invertedStyles : buttonStyles;
};

// Styled components
// Note the sass indentation rule can also be applied
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;
