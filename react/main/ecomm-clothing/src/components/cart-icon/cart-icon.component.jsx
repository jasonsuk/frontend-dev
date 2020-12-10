import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import {
    selectCartItems,
    selectCartItemsCount,
} from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// Use javascript reduce to calculate the item count & render it

// const mapStateToProps = (state) => ({
//     // However, the below codes gets rendered everytime state changes (subject to other changes than cartItemsCount)
//     // cartItemsCount: cartItems.reduce(
//     //     (accItemQty, cartItem) => accItemQty + cartItem.quantity,
//     //     0
//     // ),

//     // Instead, memoization of the state @ cart.selector.js
//     cartItemsCount: selectCartItemsCount(state),
// });

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
