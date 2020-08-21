const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'setCurrentUser':
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;

    }
};

export default userReducer;