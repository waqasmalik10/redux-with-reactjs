import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.counter})
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(el => el.id !== action.id)
            }
        default:
            return state;
    }

}

export default reducer;