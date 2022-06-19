import { GYM_LIST_SUCCESS } from '../constants/gymConstants'

export const gymListReducer = (states = { gym: [] }, actions) => {
    switch (actions.type) {
        case GYM_LIST_SUCCESS: return { gym : actions.payload }
        default: return states
    }
}