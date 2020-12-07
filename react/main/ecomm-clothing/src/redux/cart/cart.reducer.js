import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                // hidden: action.payload
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // keep the existing cart items and update it with new ones
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
