import * as types from '../constants/ActionTypes';

var initialState = [
    
];

const post = (state = initialState,action)=>{
    switch(action.type){
        case types.GET_LIST_POST: 
            return [...state];
        case types.FETCH_DATA_POST: 
        console.log('data');
            state = action.posts;
            return [...state];
        default : 
            return [...state];
    }
}
export default post;