import { StateType, ActionType } from '../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
            return { ...state, error: true };
        default:
            throw new Error();
    }
};
