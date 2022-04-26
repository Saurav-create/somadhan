import * as actionTypes from "./actionTypes";


const initialState = {
    prbs: [],
    sol: [],
    loadingPrbs: true,
    loadingsol: true,
}




export const Reducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.LOAD_PRBS:
            let prbs = [];


            for (let key in action.payload) {
                prbs.push({
                    ...action.payload[key],
                    key: key,
                })
            }

            return {
                ...state,
                prbs: prbs,
                loadingPrbs: false,
            }

        case actionTypes.LOAD_SOL:
            let sol = [];


            for (let key in action.payload) {
                sol.push({
                    ...action.payload[key],
                    key: key,
                })
            }

            return {
                ...state,
                sol: sol,
                loadingsol: false,
            }
        default:
            return {
                ...state,
            }
    }


}