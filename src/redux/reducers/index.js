import { combineReducers } from 'redux';
import { gistsSuccess } from './gists';

export default combineReducers({
    listOfGists: gistsSuccess
});
