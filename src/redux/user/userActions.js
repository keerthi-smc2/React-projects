import { FETCH_UESRS_FAILURE,FETCH_UESRS_REQUEST,FETCH_UESRS_SUCCESS } from "./userTypes";
import axios from 'axios'
export const fetchUsersRequest = () => {
    return {
        type: FETCH_UESRS_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_UESRS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_UESRS_FAILURE,
        payload:error
    }
}

export const fetchUsers = () => {
    return(dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })

    }
}