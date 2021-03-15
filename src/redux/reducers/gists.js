export function gistsErrored(state = false, action) {
    switch (action.type) {
        case 'FETCH_GISTS_ERROR':
            return action.hasErrored;

        default:
            return state;
    }
}

export function gistsLoading(state = false, action) {
    switch (action.type) {
        case 'FETCH_GISTS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function fetchGists (state = {}, action) {
    switch (action.type) {
        case 'FETCH_GISTS_SUCCESS':
            return { ...state, data: action.payload };

        default:
            return state;
    }
}
