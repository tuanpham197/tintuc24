import * as types from '../constants/ActionTypes';


export const getListPost = () =>{
    return {
        type : types.GET_LIST_POST,
    }
}

export const showLoading = () =>{
    return {
        type : types.SHOW_LOADING
    }
}
export const hideLoading = () =>{
    return {
        type : types.HIDE_LOADING
    }
}