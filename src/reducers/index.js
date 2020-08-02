import {combineReducers} from 'redux';
import post from './post'
import category from './category';
import load from './loading';

const myReducers = combineReducers({
    post,
    category,
    load
});

export default myReducers;