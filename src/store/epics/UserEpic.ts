import { ActionsObservable } from "redux-observable";
import { actionUserSuccess, actionUserFetchError, actionUserLogoutFetchSuccess, UserActionTypes, UserActions } from "../actions/userActions";
import { map, catchError, mapTo, tap, ignoreElements, switchMap } from "rxjs/operators";
import { fromPromise } from "rxjs/observable/fromPromise";
import { of } from "rxjs/observable/of";
import { concat } from 'rxjs/observable/concat';
import firebase from '../../services/firebaseService';
import { Observable } from "rxjs/Observable";
import { Loading$, Finished$ } from './index';

export function EpicUserFetch (action$: ActionsObservable<any>) {
       
    const signInWithEmailAndPassword$ = (payload) => {
        return fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)).pipe(
                    switchMap((user) => concat( of(actionUserSuccess(user)), Finished$ )),
                    catchError((error) => of(actionUserFetchError(error))))
    }

    return action$
        .ofType(UserActionTypes.USER_FETCH).pipe(
            switchMap(({payload}) => concat(Loading$, signInWithEmailAndPassword$(payload))));
};


export function EpicUserLogout (action$: ActionsObservable<any>) {

    const signOut$ = fromPromise(firebase.auth().signOut()).pipe(
                        switchMap(() => concat(of(actionUserLogoutFetchSuccess()), Finished$)),
                        catchError((error) => of(actionUserFetchError(error))));

    return action$.ofType(UserActionTypes.USER_LOGOUT_FETCH).pipe(
            switchMap(() => concat(Loading$,signOut$)));
} 

export function EpicUserOnAuthStateChanged (action$: ActionsObservable<any>) {
    let firebaseUnsubscribe;
    const FirebaseUserObservable = Observable.create((observer) => {
        firebaseUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
            observer.next(user);
            observer.complete();
        });
    }).pipe(
        tap(() => firebaseUnsubscribe()),
        switchMap((user) => concat(of(UserActions.actionUserSuccess(user)), Finished$))
     );
    

    return action$.ofType(UserActionTypes.USER_ON_AUTH_STATE_CHANGED).pipe(
        switchMap(() => concat(Loading$, FirebaseUserObservable))
    )
}