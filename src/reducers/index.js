import {combineReducers} from 'redux';
import post from './post'
import category from './category'

const myReducers = combineReducers({
    post,
    category
});

export default myReducers;