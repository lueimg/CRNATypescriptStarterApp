import { combineReducers } from "redux";
import UserReducer from './userReducer';
import CallInProgressReducer from "./CallInProgressReducer";
import expoFontReducer from "./expoFontReducer";

export interface IStore {
    user: Object,
    callInProgress: number,
    expoFont: boolean
}

const rootReducer = combineReducers({
    user: UserReducer,
    callInProgress: CallInProgressReducer,
    expoFont: expoFontReducer
});

export default rootReducer;