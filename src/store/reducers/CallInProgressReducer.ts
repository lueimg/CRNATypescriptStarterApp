import { CALL_STARTED, CALL_FINISHED } from "../actions/callInProgressActions";


export default function CallInProgressReducer(state = 0, action) {
    switch (action.type) {
        case CALL_STARTED:
            return state + 1;
        case CALL_FINISHED:
            return state === 0 ? 0 : state - 1;
        default:
            return state;
    }
}