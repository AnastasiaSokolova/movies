export const loadMovies = (data) => (dispatch) => {
    dispatch({
        type: constants.LOAD_MOVIES,
        data: data
    });
};
