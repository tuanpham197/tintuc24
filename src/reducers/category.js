import * as types from '../constants/ActionTypes';

var initialState = [
    {
        "_id": "5f1ea8cc7497a1251c529b92",
        "title": "Xã hội",
        "slug": "xa-hoi",
        "createdAt": "2020-07-27T10:13:32.053Z",
        "updatedAt": "2020-07-27T10:13:32.053Z",
        "__v": 0
    },
    {
        "_id": "5f1ea90d7497a1251c529b94",
        "title": "Thể thao",
        "slug": "the-thao",
        "createdAt": "2020-07-27T10:14:37.258Z",
        "updatedAt": "2020-07-27T10:14:37.258Z",
        "__v": 0
    }
]

const category = (state = initialState,action)=>{
    switch(action.type){
        case types.GET_LIST_CATEGORY: 
            return [...state];
        case types.FETCH_DATA_CAT: 
            state = action.categorys;
            return [...state];

        default: 
            return [...state];
    }
}

export default  category;