import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { reducer } from '../Reducer/Reduce';
import { ParamsType, BASE_URL, initialState } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFetch = (params: ParamsType): any => {
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
            .then(({ data }) => {
                dispatch({ type: 'GET_DATA', payload: data.results });
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                console.log(err);
                dispatch({ type: 'ERROR' });
            });
        return () => {
            cancelToken1.cancel();
        };
    }, [params]);

    const sortByListner = (): void => {
        //  dispatch({ type: 'MAKE_REQUEST' });
        const arr1 = state.films.map((obj) => {
            return { ...obj, release_date: new Date(obj.release_date) };
        });
        const sortedAsc = arr1.sort((objA, objB) => objB.release_date.getTime() - obj.release_date.getTime());
        console.log('object', { sortedAsc });
    };

    return { state, sortByListner };
};

export type useFetchType = ReturnType<typeof useFetch>;
