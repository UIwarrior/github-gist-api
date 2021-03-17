import { combineReducers } from 'redux';
import { fetchGistsReducer } from './gists';

export default combineReducers({
    gists: fetchGistsReducer
});
