import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

export const fetchAds = () => (dispatch) => {
    // dispatch(dishesLoading(true))
    return fetch(`http://192.168.1.63:3000/ads`, {
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
            return error
        }
    },
    error => {
        var errmess = new Error(error.message)
        return errmess
    })
    .then(response => console.log('res:', response))
    // .then(response => {return response})
    // .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => console.log('err', error))
}