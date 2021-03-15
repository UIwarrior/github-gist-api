import { combineReducers } from 'redux';
import { fetchGists, gistsErrored, gistsLoading } from './gists';

export default combineReducers({
    fetchGists,
    gistsErrored,
    gistsLoading
});
