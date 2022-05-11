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
                const filmdData = data.results.map((obj: { release_date: Date }) => {
                    return { ...obj, release_date: new Date(obj.release_date) };
                });
                dispatch({ type: 'GET_DATA', payload: filmdData });
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

    const sortByyearListner = (): void => {
        dispatch({ type: 'MAKE_REQUEST' });
        const sortedResult = state.films.sort(
            (objA, objB) => objB.release_date.getTime() - objA.release_date.getTime(),
        );
        dispatch({ type: 'GET_DATA', payload: sortedResult });
    };

    const sortByEpListner = (): void => {
        // dispatch({ type: 'MAKE_REQUEST' });
        const sortedResult = state.films.sort((objA, objB) => objB.episode_id - objA.episode_id);
        console.log(sortedResult);
        //  dispatch({ type: 'GET_DATA', payload: sortedResult });
    };

    return { state, sortByyearListner, sortByEpListner };
};

export type useFetchType = ReturnType<typeof useFetch>;
