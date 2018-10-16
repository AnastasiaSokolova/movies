const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MOVIES':
            state = [...state, action.payload];
        default:
            return []
    }
}

export default reducer
