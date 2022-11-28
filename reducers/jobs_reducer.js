import { FETCH_JOBS } from "../actions/types";

const initialState = {
    results: []
}

export default function (state, action) {
    switch (action.type) {
        case FETCH_JOBS :
            return  action.payload
        default: 
            return initialState
    }
}