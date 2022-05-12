export type ParamsType = {
    search: string;
};

export const BASE_URL = 'https://swapi.dev/api/films';

export type ActionType = { type: 'MAKE_REQUEST' } | { type: 'GET_DATA'; payload: FilmType[] } | { type: 'ERROR' };

export type StateType = {
    films: FilmType[];
    loading: boolean;
    error: boolean;
};

export const initialState: StateType = {
    films: [],
    loading: false,
    error: false,
};

export type FilmType = {
    id: number;
    episode_id: number;
    title: string;
    release_date: Date;
    opening_crawl: string | number;
    characters: string[];
};

export type HookType = {
    state: StateType;
    sortByyearListner: () => void;
    sortByEpListner: () => void;
};

export type FilmProps = {
    film: FilmType;
};

export type CharacterType = {
    name: string | number;
    gender: string | number;
    species: string[];
};

export type CharacterProps = {
    character: string;
};

export type SpecieProps = {
    specie: string;
};

export type SpecieType = {
    average_height: string | number;
    designation: string | number;
    language: string | number;
};

export type ModalProps = {
    children: React.ReactNode;
    title: string | number;
    onClose: () => void;
    show: boolean;
};

export const isEmpty = (empty: any) => {
    return Object.keys(empty).length !== 0 && empty.constructor !== Object;
};
