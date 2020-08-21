import cartTypes from './cart.type';

export const toggleCartHidden = () => ({
    type: cartTypes.toggleCartDropDown
});

export const addItem = item => ({
    type: cartTypes.addItem,
    payload: item
});

export const clearItem = item => ({
    type: cartTypes.clearItem,
    payload: item
});

export const removeItem = item => ({
    type: cartTypes.removeItem,
    payload: item
});

export const clearItems = () => ({
    type: cartTypes.clearItems
});