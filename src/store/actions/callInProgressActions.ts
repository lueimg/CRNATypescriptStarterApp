export const CALL_STARTED = '[CALL] CALL_STARTED';
export const CALL_FINISHED = '[CALL] CALL_FINISHED';

export const started = () => ({ type: CALL_STARTED});
export const finished = () => ({ type: CALL_FINISHED});

export const CallActions = {
    started,
    finished,
}