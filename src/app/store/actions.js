import constants from './constants';

import userManager from "../utils/userManager.jsx";

const key = '?api_key=f3754f54a647c3b3e1a8cc28028c910b';

export const loadMovies = (data) => (dispatch) => {
    fetch('https://api.themoviedb.org/3/movie/top_rated' + key)
        .then(response => response.json())
        .then(result => {
               dispatch({
                   type:constants.LOAD_MOVIES,
                   data: result.results
               });
        })
};

export const setUser = (data) => (dispatch) => {
    userManager.signinRedirectCallback()
        .then((user) => {
           dispatch({
               type: constants.SET_USER,
               data: user
           });
        })
        .catch((error) => console.log(error));
};
