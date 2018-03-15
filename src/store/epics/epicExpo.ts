import { ActionsObservable } from "redux-observable";
import { ExpoActionTypes, ExpoActions } from "../actions/expoActions";
import { switchMap, mapTo, catchError } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Font } from "expo";
import { of } from 'rxjs/observable/of';

function fetchFont () { 
    return Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
}

export function epicExpoFontFetch (action$: ActionsObservable<any>) {
    return action$.ofType(ExpoActionTypes.FETCH_FONTS).pipe(
        switchMap(() => fromPromise(fetchFont()).pipe(
            mapTo(ExpoActions.fetchFontsSuccess()),
            catchError((error) => of(ExpoActions.fetchFontsError())))))
}