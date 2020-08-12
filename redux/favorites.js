import * as ActionTypes from './ActionTypes'

export const favorites = (state = {
    isLoading: true,
    errMess: null,
    favorites: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAV:
            return {...state, isLoading: false, errMess: null, favorites: action.payload}
        case ActionTypes.FAV_LOADING:
            return {...state, isLoading: true, errMess: null, favorites: []}
        case ActionTypes.FAV_FAILED:
                return {...state, isLoading: false, errMess: action.payload, favorites: []}
        default:
            return state
    }
}