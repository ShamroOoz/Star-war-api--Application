import { StateType, ActionType } from '../types';

export const reducer = (state: StateType, action: ActionType) => {
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
            return { ...state, error: true, loading: false };
        default:
            throw new Error();
    }
};
