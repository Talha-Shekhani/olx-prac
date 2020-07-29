import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

export const fetchAds = () => () => {
    // dispatch(dishesLoading(true))
    return fetch(baseUrl + 'ads', {
        mode: 'no-cors',
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return reponse
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error
        }
    },
    error => {
        var errmess = new Error(error.message)
        return errmess
    })
    .then(response => console.log(response))
    // .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => console.log(error.response))
}