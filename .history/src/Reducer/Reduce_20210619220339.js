export const ACTIONS = {
    MAKE_REQUEST: 'MAKE_REQUEST',
    GET_DATA: 'GET_DATA',
    ERROR: 'ERROR',
};
type ActionType =
    | { type: 'MAKE_REQUEST', payload: string }
    | { type: 'GET_DATA', payload: number }
    | { type: 'ERROR', payload: number };

export const reducer = (state, action: ActionType) => {
    switch (action.type) {
        case 'MAKE_REQUEST':
            return { ...state, loading: true };
        case 'GET_DATA':
            return {
                ...state,
                loading: false,
                films: action.payload,
            };
        case 'ERROR':
            return { ...state, error: true };
        default:
            return state;
    }
};
