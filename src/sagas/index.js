import {cancel, fork, put, takeLatest,takeEvery, all ,delay, take} from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';
import axios from 'axios';
import {showLoading,hideLoading} from '../actions/index';


function* fetchCategory(){

    var res = yield axios.get('http://localhost:3000/category/')
    if(res)
        yield put({type: types.FETCH_DATA_CAT,categorys:res.data.data});
 
}
function* fetchPost(){
    var res = yield axios.get('http://localhost:3000/post/')
    if(res){
        console.log("Data");
        yield put({type: types.FETCH_DATA_POST, posts:res.data.data});
    }
}

// function* getPostByCat(){
//     var res = yield axios.get('http://localhost:3000/post/')
// }
// function* fetchData(){
//     yield put(showLoading);
//     //yield fork(fetchCategory);
//     yield fork(fetchPost);

//     yield delay(1000);
//     yield put(hideLoading);
// }
export default function* rootSaga(){
    //fetch dữ liệu khi lần đầu khởi chạy 
    //yield fork(fetchData);

    yield all([
        fetchPost(),
        fetchCategory()
    ])
}