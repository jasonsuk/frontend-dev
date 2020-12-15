import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../assets/logo.svg';

import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionContainer,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer className="header">
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer className="options">
            <OptionContainer className="option" to="/shop">
                SHOP
            </OptionContainer>
            <OptionContainer className="option" to="/contact">
                CONTACT
            </OptionContainer>
            {currentUser ? (
                <OptionContainer
                    as="div"
                    className="option"
                    onClick={() => auth.signOut()}
                >
                    Sign Out
                </OptionContainer>
            ) : (
                <OptionContainer className="option" to="/signin">
                    Sign In
                </OptionContainer>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

// As the first argument passed in to connect,
// mapStateToProps is used for selecting the part of the data
// from the store that the connected component needs.

// The first argument is state = the entire Redux store state
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     // Return object that gets data to prop of component
//     currentUser: currentUser,
//     hidden: hidden,
// });

// Using reselect for state memoization
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
