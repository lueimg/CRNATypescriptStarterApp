export enum ExpoActionTypes {
    FETCH_FONTS = '[EXPO] FETCH_FONTS',
    FETCH_FONTS_SUCCESS = '[EXPO] FETCH_FONTS_SUCCESS',
    FETCH_FONTS_ERROR = '[EXPO] FETCH_FONTS_ERROR',
}

export function fetchFonts () {
    return {
        type: ExpoActionTypes.FETCH_FONTS
    }
}

export function fetchFontsSuccess () {
    return {
        type: ExpoActionTypes.FETCH_FONTS_SUCCESS
    }
}

export function fetchFontsError () {
    return {
        type: ExpoActionTypes.FETCH_FONTS_ERROR
    }
}

export const ExpoActions = {
    fetchFonts,
    fetchFontsSuccess,
    fetchFontsError
}