import { ExpoActionTypes } from './../actions/expoActions';


export default function expoFontReducer(state = false, action) {
    switch (action.type) {
        case ExpoActionTypes.FETCH_FONTS:
        case ExpoActionTypes.FETCH_FONTS_ERROR:
            return false;
        case ExpoActionTypes.FETCH_FONTS_SUCCESS:
            return true;
        default:
            return state;
    }
}