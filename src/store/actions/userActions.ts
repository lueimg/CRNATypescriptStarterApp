import { Action, AnyAction } from "redux";

export enum UserActionTypes {
    USER_FETCH = '[USER] USER_FETCH',
    USER_FETCH_ERROR = '[USER] USER_FETCH_ERROR',
    USER_FETCH_SUCCESS = '[USER] USER_FETCH_SUCCESS',
    USER_LOGOUT_FETCH = '[USER] USER_LOGOUT_FETCH',
    USER_LOGOUT_FETCH_SUCCESS = '[USER] USER_LOGOUT_FETCH_SUCCESS',
    USER_ON_AUTH_STATE_CHANGED = '[USER] [FIREBASE] USER_ON_AUTH_STATE_CHANGED',

}

export function userOnAuthStateChanged (): Action {
    return {
        type: UserActionTypes.USER_ON_AUTH_STATE_CHANGED
    }
}

export const actionUserFetch = (payload): AnyAction => ({
    type: UserActionTypes.USER_FETCH,
    payload
})

export const actionUserFetchError = (payload): AnyAction => ({
    type: UserActionTypes.USER_FETCH_ERROR,
    payload
})

export function actionUserSuccess (payload) {
    return {
        type: UserActionTypes.USER_FETCH_SUCCESS,
        payload
    }
}

export const actionUserLogout = (): AnyAction => ({
    type: UserActionTypes.USER_LOGOUT_FETCH
})

export const actionUserLogoutFetchSuccess = (): AnyAction => ({
    type: UserActionTypes.USER_LOGOUT_FETCH_SUCCESS
})

export const UserActions = {
    actionUserFetch,
    actionUserFetchError,
    actionUserSuccess,
    actionUserLogout,
    actionUserLogoutFetchSuccess,
    userOnAuthStateChanged,
}
