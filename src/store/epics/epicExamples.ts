
// export function loadUserEpic(action$:any) {
//     return action$.ofType(USER_LOGIN)
//         .pipe(
//             tap((e:any) => console.log(e)),
//             ignoreElements()
//         )
// }

// export function loadUserEpic(action$:any) {
//     return action$.ofType(USER_LOGIN)
//         .pipe(
//             switchMap(() => of(userLogout()).pipe(delay(2000)))
//         )
// }

// export function fetchUserGithubEpic(action$: any) {
//     return action$.ofType('FETCH_USER_GITHUB')
//         .pipe(
//             switchMap( ({ payload }) => {
//                 return ajax.getJSON(`https://api.github.com/users/${payload}`)
//                         .pipe(
//                             // tap((e:any) => console.log(e)),
//                             // ignoreElements()
//                             map((user:any) => LoadUser(user))
//                         )
//                 }
//             )
//         )
// }

/** 
 * Cancel 
 const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`/api/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
        .takeUntil(action$.ofType(FETCH_USER_CANCELLED))
    );
 * 
 * 
 * 
 * Cancel and do something else 
 
const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`/api/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
        .race(
          action$.ofType(FETCH_USER_CANCELLED)
            .map(() => incrementCounter())
            .take(1)
        )
    );

    Error Handling 

    const fetchUserEpic = action$ =>
      action$.ofType(FETCH_USER)
        .mergeMap(action =>
          ajax.getJSON(`/api/users/${action.payload}`)
            .map(response => fetchUserFulfilled(response))
            .catch(error => Observable.of({
              type: FETCH_USER_REJECTED,
              payload: error.xhr.response,
              error: true
            }))
        );





        import { of as of$ } from 'rxjs/observable/of'
import { concat as concat$ } from 'rxjs/observable/concat'

export const getTrackedWinesEpic = (action$, store) =>
  action$.ofType(TRACKED_WINES_REQUEST).switchMap(() =>
    concat$(
      of$(beginFetch()),
      api.getTrackedWines$().map(trackedWines).catch(e => of$(trackedWines(e))),
      of$(endFetch()),
    )
  )


  
*/