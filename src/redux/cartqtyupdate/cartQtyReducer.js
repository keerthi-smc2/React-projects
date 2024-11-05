import { ADD_QUANTITY } from "./cartQtyTypes";

const initialState = {
    totalQuantity: 0
}

const cartQtyReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_QUANTITY: 
            return {
                ...state,
                totalQuantity : action.payload
                
            }
        default: 
            return state;
    }
}

export default cartQtyReducer