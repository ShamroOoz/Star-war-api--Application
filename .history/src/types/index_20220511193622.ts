interface filmsType {
    episode_id: string;
    release_date: Date;
    title: string;
}

export type StateType = {
    films: filmsType[];
    loading: boolean;
    error: boolean;
};

export type HookType = {
    films: never[];
    loading: boolean;
    error: boolean;
};

export type ParamsType = {
    search: string;
};

export const BASE_URL = 'https://swapi.dev/api/films';

export type ActionType = { type: 'MAKE_REQUEST' } | { type: 'GET_DATA'; payload: filmsType[] } | { type: 'ERROR' };

export const initialState: StateType = {
    films: [],
    loading: false,
    error: false,
};

export type FilmType = {
    episode_id: number;
    title: string;
    release_date: string | number;
    opening_crawl: string | number;
    characters: string[];
};

export type FilmProps = {
    film: FilmType;
    id: number;
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
