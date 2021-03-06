import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.counter})});
        case actionTypes.DELETE_RESULT:
            return updateObject(state, {results: state.results.filter(el => el.id !== action.id)});
        default:
            return state;
    }

}

export default reducer;