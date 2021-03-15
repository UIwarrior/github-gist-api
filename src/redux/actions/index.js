import axiosInstance from "../../core/api";

const FETCH_GISTS_SUCCESS = "FETCH_USER_GISTS_SUCCESS";
const FETCH_GISTS_ERROR = "FETCH_USER_GISTS_ERROR";
const FETCH_GISTS_LOADING = "FETCH_USER_GISTS_LOADING";

export function fetchGists ({ userName }) {
    return (dispatch) => {
        axiosInstance.get(`/users/${userName}/gists`)
            .then((response) => {
                console.log("thunk fetching data");
                console.log(response);
                dispatch({
                    type: FETCH_GISTS_SUCCESS,
                    payload: response.data
                });
            });
    };
}
