import * as actionTypes from './actionTypes'

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        counter: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        const oldCounter = getState().ctr.counter;
        console.log('[result.js] oldCounter = ', oldCounter);
        setTimeout( () => {
                dispatch(saveResult(res))
            },
            3000
        )
    }
}

export const deleteResult = (resultElementID) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: resultElementID
    }
}