import axios from 'axios';
import * as actionTypes from './actionTypes';



export const loadprbs = (prbs) => {
    return {
        type: actionTypes.LOAD_PRBS,
        payload: prbs,
    }
}
export const loadSol = sol => {
    return {
        type: actionTypes.LOAD_SOL,
        payload: sol,
    }
}

export const fetchPrbs = () => dispatch => {
    axios.get("https://somadhan-c41e4-default-rtdb.firebaseio.com/data.json")
        .then(res => {
            dispatch(loadprbs(res.data));
        }
        )
}

export const fetchSol = () => dispatch => {
    axios.get("https://somadhan-c41e4-default-rtdb.firebaseio.com/sol.json")
        .then(res => {
            dispatch(loadSol(res.data));
        }
        )
}