import { UserActionTypes } from "../actions/userActions";


const defaultState = null;

type Action = {
    type: string,
    payload?: any
}

export default function UserReducer(state = defaultState, action: Action) {
    switch (action.type) {
        case UserActionTypes.USER_FETCH_ERROR:
        case UserActionTypes.USER_LOGOUT_FETCH_SUCCESS:
            return null
        case UserActionTypes.USER_FETCH_SUCCESS:
            return action.payload;
    }
    return state;
}