import * as actionTypes from './actionTypes';

const initialState = {
    counter: 0,
    results: []
}
let id = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.val 
            }
        case actionTypes.SAVE:
            return {
                ...state,
                results: state.results.concat({id: ++id, value: action.payload.results})
            }
        default:
            return state
    }
}

export default reducer;