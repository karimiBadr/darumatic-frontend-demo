import * as types from './actionTypes';
import axios from 'axios';

function requestData() {
    return {type: types.REQUEST_DATA}
}

function receiveData(json) {
    return{
        type: types.RECEIVE_DATA,
        data: json
    }
};

function errorData(err) {
    return{
        type: types.ERROR_DATA,
        err
    }
};

export function fetchData(url) {
    return function(dispatch) {
        dispatch(requestData());
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(receiveData(response.data));
            })
            .catch(function(response){
                dispatch(errorData(response.data));
            })
    }
};