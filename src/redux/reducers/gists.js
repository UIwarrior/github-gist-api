import { FETCH_GISTS_SUCCESS, FETCH_GISTS_ERROR } from '../actions';
const initialState = {
    listOfGists: {
        data: [],
        error: {}
    }
};

export function fetchGistsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_GISTS_SUCCESS:
            state.listOfGists.data = action.payload;
            state.listOfGists.error = {};
            return {...state};
        case FETCH_GISTS_ERROR:
            state.listOfGists.error = action.payload.response;
            state.listOfGists.data = [];
            return {...state};
        default:
            return state;
    }
}

