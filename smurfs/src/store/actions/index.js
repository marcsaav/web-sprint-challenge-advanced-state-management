import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
export const SET_SMURF_NAME = 'SET_SMURF_NAME'
export const SET_SMURF_AGE = 'SET_SMURF_AGE'
export const SET_SMURF_HEIGHT = 'SET_SMURF_HEIGHT'
export const POST_SMURF = 'POST_SMURF'

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });

    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
      });
  };
};

export const setSmurfName = (value) => {
    return(
        { type: SET_SMURF_NAME, payload: value}
    )
}

export const setSmurfAge = (value) => {
    return(
        { type: SET_SMURF_AGE, payload: value}
    )
}

export const setSmurfHeight = (value) => {
    return(
        { type: SET_SMURF_HEIGHT, payload: value}
    )
}

export const setSmurf = (smurf) => {
    return(
        { type: POST_SMURF, payload: smurf }
    )
}