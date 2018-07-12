import {combineReducers} from 'redux';
import articles from './articles';
import filter from './filter';
import comments from './comments';

export default combineReducers({
    articles,
    filter,
    comments
});