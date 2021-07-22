import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';


function MyReducer(state = {
                            isLoading: false,
                            data: [],
                            error: false}
    , action = null) {
    switch(action.type) {
        case types.RECEIVE_DATA:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
        case types.REQUEST_DATA:
            return Object.assign({}, state, {isLoading: true, error: false });
        case types.ERROR_DATA:
            return Object.assign({}, state, {isLoading: false, error: true, err: action.err });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    myReducer: MyReducer
});

export default rootReducer;