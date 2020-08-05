import * as ActionTypes from './ActionTypes'
import { baseUrl, dirctry, api } from '../shared/baseUrl'

export const fetchAds = () => (dispatch) => {
    dispatch(adsLoading(true))
    return fetch(`${api}ads`, {
        mode: 'no-cors',
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response
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
    .then((response) => {return response.json()})
    .then (response => dispatch(addAllAds(response)))
    .catch(error => dispatch(adsFailed(error)))
}

export const adsLoading = () => ({
    type: ActionTypes.ADS_LOADING
})

export const adsFailed = (errmess) => ({
    type: ActionTypes.ADS_FAILED,
    payload: errmess
})

export const addAllAds = (ads) => ({
    type: ActionTypes.ADD_ADS,
    payload: ads
})

export const fetchCategories = () => (dispatch) => {
    dispatch(catLoading(true))
    return fetch(`${dirctry}fetchCat`, {
        mode: 'no-cors',
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response
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
    .then((response) => {return response.json()})
    // .then (response => console.log((response)))
    .then (response => dispatch(catAllAds(response)))
    .catch(error => dispatch(catFailed(error)))
}

export const catLoading = () => ({
    type: ActionTypes.CAT_LOADING
})

export const catFailed = (errmess) => ({
    type: ActionTypes.CAT_FAILED,
    payload: errmess
})

export const catAllAds = (cat) => ({
    type: ActionTypes.ADD_CAT,
    payload: cat
})

export const fetchSubCategories = () => (dispatch) => {
    dispatch(subCatLoading(true))
    return fetch(`${dirctry}fetchSubcat`, {
        mode: 'no-cors',
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response
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
    .then((response) => {return response.json()})
    // .then (response => console.log((response)))
    .then (response => dispatch(subCatAllAds(response)))
    .catch(error => dispatch(subCatFailed(error)))
}

export const subCatLoading = () => ({
    type: ActionTypes.SUBCAT_LOADING
})

export const subCatFailed = (errmess) => ({
    type: ActionTypes.SUBCAT_FAILED,
    payload: errmess
})

export const subCatAllAds = (subCat) => ({
    type: ActionTypes.ADD_SUBCAT ,
    payload: subCat
})
