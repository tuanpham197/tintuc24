import {combineReducers} from 'redux';
import posts from './post'
import category from './category';
import load from './loading';

const myReducers = combineReducers({
    posts,
    category,
    load
});

export default myReducers;