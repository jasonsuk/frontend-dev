import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Similar to mixin
// import {css} from 'styled-components'

// const OptionStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;
//     text-transform: uppercase;
// `;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionContainer = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
`;

// export const OptionDivContainer = styled.div`
//     ${OptionStyles}
// `;

// export const OptionLinkContainer = styled(Link)`
//     ${OptionStyles}
// `;