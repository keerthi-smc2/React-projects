import { ADD_QUANTITY } from "./cartQtyTypes";

export const addQuantity = (quantity) => ({
        type: ADD_QUANTITY,
        payload: quantity
});