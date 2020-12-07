import CartActionTypes from './cart.types';

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    // no payload as action for state is specified in cart.reducer.js
});

export default toggleCartHidden;
