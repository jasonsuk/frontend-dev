export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    );

    if (existingItem) {
        // Update cartItems
        return cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
