const initialState = { responseList: {} }

export const responsesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESPONSE':
            return {...state, responseList: action.payload}
        case 'DELETE_RESPONSE':
            return {...state, responseList: {}}
        default:
            return state
    }
}
