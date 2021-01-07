import { FETCH_USER_DATA } from './constants'
const initialState = null

export default function (state = initialState, actions: any) {
    switch (actions.type) {
        case FETCH_USER_DATA:
            return actions.payload;
        default:
            return state
    }
}