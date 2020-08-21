import {createSelector} from 'reselect';

export const selectCart = state => state.cart;

export const selectcartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectItemsCount = createSelector(
    [selectcartItems],
    cartItems => 
    cartItems.reduce((
        accumulatedQuantity, cartItem
    ) => accumulatedQuantity + cartItem.quantity,
    0
    )
);

export const selectCartTotal = createSelector(
    [selectcartItems],
    cartItems => 
    cartItems.reduce((
        accumulatedQuantity, cartItem
    ) => accumulatedQuantity + cartItem.quantity*cartItem.price,
    0
    )
)