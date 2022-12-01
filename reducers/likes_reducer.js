import { LIKE_JOBS, CLEAR_LIKED_JOBS } from "../actions/types";
import _ from 'lodash'
import { REHYDRATE } from 'redux-persist/es/constants'


export default function (state = [], action) {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.likedJobs || []
        case LIKE_JOBS:
            return _.uniqBy([action.payload, ...state], 'jobkey')
        case CLEAR_LIKED_JOBS:
            return []
        default: 
             return state
    }
}