import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, ...otherProps }) => {
    console.log(otherProps);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    // notice how dispatch as a prop used here
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

// const mapStateToProps = (state) => ({
//     // Memoization of the state @ cart.selector.js
//     cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
// IMPORTANT & USEFUL!
// Connect actually passes dispatch into component as a prop
// if mapDispatchToProps is not specified as a secondary parameter
// this means that we don't need writing extra mapDispatchToProps but assign it as a prop
