import axiosInstance from "../../core/api";

export const FETCH_GISTS_SUCCESS = "FETCH_USER_GISTS_SUCCESS";
export const FETCH_FORKS_LOADING = "FETCH_USER_FORKs_LOADING";

export function fetchGists ({ userName }) {
    let finalGistsData = [];
    return (dispatch) => {
        axiosInstance.get(`/users/${userName}/gists`)
            .then(async (response) => {
                await Promise.all(
                    response.data.map(async (element) => {
                        const forksData = await axiosInstance.get(`/gists/${element.id}/forks`);
                        if (forksData) {
                            const forkData = await forksData.data;
                            element.forkData = forkData;
                        }
                        finalGistsData.push(element);
                    }));

                dispatch({
                    type: FETCH_GISTS_SUCCESS,
                    payload: finalGistsData
                });
            });
    };
}
