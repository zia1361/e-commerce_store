import cartTypes from './cart.type';
import {addItemToCart, clearItemFromCart, removeItemFromCart} from './cart.utils';

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case cartTypes.toggleCartDropDown:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.addItem:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartTypes.clearItem:
            return{
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        case cartTypes.removeItem:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartTypes.clearItems:
            return{
                ...state,
                cartItems: []
            }
        default: return state;
    }
}

export default cartReducer;