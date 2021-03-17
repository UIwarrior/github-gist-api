import { combineReducers } from 'redux';
import { gistsSuccess, gistsError } from './gists';

export default combineReducers({
    listOfGists: gistsSuccess,
    error: gistsError,
});
