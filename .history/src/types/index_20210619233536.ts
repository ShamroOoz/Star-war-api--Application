export type StateType = {
    films: never[];
    loading: boolean;
    error: boolean;
};

export type ParamsType = {
    search: string;
};

export const BASE_URL = 'https://swapi.dev/api/films';

export const initialState: StateType = {
    films: [],
    loading: false,
    error: false,
};
