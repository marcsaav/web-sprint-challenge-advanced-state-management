import axios from 'axios'

import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    SET_SMURF_NAME,
    SET_SMURF_AGE,
    SET_SMURF_HEIGHT,
    POST_SMURF
} from '../actions'

const initialState = {
    isLoading: false,
    smurfs: [],
    error: '',
    smurfName: '',
    smurfAge: 0,
    smurfHeight: ''
}

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_SMURF:
            axios
                .post('http://localhost:3333/smurfs', action.payload)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    alert(err.response.data.Error)
                })
            return {
                ...state,
                smurfName: '',
                smurfAge: 0,
                smurfHeight: ''
            }
        case SET_SMURF_NAME:
            return {...state, smurfName: action.payload}
        case SET_SMURF_AGE:
            return {...state, smurfAge: action.payload}
        case SET_SMURF_HEIGHT:
            return {...state, smurfHeight: action.payload}
        case FETCH_SMURFS_START:
            return {
              ...state,
              isLoading: true,
              error: ""
            };
          case FETCH_SMURFS_SUCCESS:
            return {
              ...state,
              isLoading: false,
              smurfs: action.payload,
              error: ""
            };
          case FETCH_SMURFS_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.payload
            };
        default:
            return state
    }
}