export type StateType = {
    films: never[];
    loading: boolean;
    error: boolean;
};

export type ParamsType = {
    search: string;
};

export const BASE_URL = 'https://swapi.dev/api/films';

export type ActionType = { type: 'MAKE_REQUEST' } | { type: 'GET_DATA'; payload: never[] } | { type: 'ERROR' };

export const initialState: StateType = {
    films: [],
    loading: false,
    error: false,
};
