import * as actionTypes from './actionTypes';

const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 3000)
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};


// export const getData = () => {
//     return (dispatch) => {
//        return fetch('http://localhost:8000/data')
//             .then(res => res.json())
//             .then(data => {
//                 dispatch({ type: 'GOT_DATA', data })
//             })
//     }
// }