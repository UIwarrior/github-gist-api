import { FETCH_GISTS_SUCCESS, FETCH_FORKS_LOADING } from '../actions';
const initialState = {
    gists: []
};

export function gistsSuccess (state = initialState, action) {
    switch (action.type) {
        case FETCH_GISTS_SUCCESS:
            state.gists = action.payload;
            return { ...state };

        default:
            return state;
    }
}
