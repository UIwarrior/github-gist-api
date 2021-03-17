import { FETCH_GISTS_SUCCESS, FETCH_GISTS_ERROR } from '../actions';
const initialState = {
    gists: [],
    error: {},
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


export function gistsError (state = initialState, action) {
    switch (action.type) {
        case FETCH_GISTS_ERROR:
            state.error = action.payload;
            state.gists = [];
            return { ...state };

        default:
            return state;
    }
}
