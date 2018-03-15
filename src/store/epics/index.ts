import { combineEpics } from "redux-observable";
import { CallActions } from "../actions/callInProgressActions";
import { epicExpoFontFetch } from "./epicExpo";
import { EpicUserFetch, EpicUserLogout, EpicUserOnAuthStateChanged } from "./UserEpic";
import { of } from "rxjs/observable/of";

export const Loading$ = of(CallActions.started());
export const Finished$ = of(CallActions.finished());

export default combineEpics(
    EpicUserFetch,
    EpicUserLogout,
    epicExpoFontFetch,
    EpicUserOnAuthStateChanged,
)