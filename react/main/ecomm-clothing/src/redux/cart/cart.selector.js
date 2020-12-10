import { createSelector } from 'reselect';
// Memoization of the state

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accTotal, cartItem) => accTotal + cartItem.quantity * cartItem.price,
        0
    )
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accItemQty, cartItem) => accItemQty + cartItem.quantity,
            0
        )
);
