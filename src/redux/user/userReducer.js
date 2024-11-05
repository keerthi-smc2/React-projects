import { FETCH_UESRS_FAILURE,FETCH_UESRS_SUCCESS,FETCH_UESRS_REQUEST } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state= initialState,action) => {
    switch(action.type) {
        case FETCH_UESRS_REQUEST: return {
            ...state,
           loading:true
        }
        case FETCH_UESRS_SUCCESS: return {
            ...state,
            loading:false,
            users: action.payload,
            error: ''
        }
        case FETCH_UESRS_FAILURE: return {
            ...state,
            loading:false,
            users: [],
            error: action.payload
        }
        default: return state
    }
    
}

export default userReducer