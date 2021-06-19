import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { reducer } from '../Reducer/Reduce';

type StateType = {
    films: never[];
    loading: boolean;
    error: boolean;
};

const initialState: StateType = {
    films: [],
    loading: false,
    error: false,
};

type ParamsType = {
    search: string;
};

//
// const { MAKE_REQUEST, GET_DATA, ERROR } = ACTIONS;
//
const BASE_URL = 'https://swapi.dev/api/films';

export const useFetch = (params: ParamsType): StateType => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source();
        dispatch({ type: 'MAKE_REQUEST' });
        axios
            .get(BASE_URL, {
                cancelToken: cancelToken1.token,
                params: {
                    ...params,
                },
            })
            .then((res) => {
                dispatch({ type: 'GET_DATA', payload: res.data.results });
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                // dispatch({ type: 'ERROR', payload: err });
                dispatch({ type: 'ERROR' });
            });
        return () => {
            cancelToken1.cancel();
        };
    }, [params]);

    return state;
};
