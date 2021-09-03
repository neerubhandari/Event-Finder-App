
import { FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST, FETCH_DATA_FAIL } from "../actions/types";
const initialState = {
    data: [],
    loading: true,
    error: "Error"
};

function eventReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true }
        case FETCH_DATA_SUCCESS:
            return {
                ...state, data: action.payload,
                loading: false,
            };
        case FETCH_DATA_FAIL:
            return {
                loading: false,
                events: [],
                error: action.payload,
            };
        default:
            return state;
    }
}

export default eventReducer;
