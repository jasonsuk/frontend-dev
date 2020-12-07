import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    // no payload as action for state is specified in cart.reducer.js
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});
