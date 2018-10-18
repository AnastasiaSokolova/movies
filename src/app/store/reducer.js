import constants from './constants';

const reducer = (state=[], action) => {
    switch(action.type) {
        case constants.LOAD_MOVIES:
            return action.data;
        default:
            return state
    }
};

export default reducer
