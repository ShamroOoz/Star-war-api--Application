import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { reducer } from '../Reducer/Reduce';
import { HookType, ParamsType, BASE_URL, initialState } from '../types';

export const useFetch = (params: ParamsType): HookType => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const controller = new AbortController();
        dispatch({ type: 'MAKE_REQUEST' });
        axios
            .get(BASE_URL, {
                signal: controller.signal,
                params: {
                    ...params,
                },
            })
            .then(({ data }) => {
                const filmdData = data.results.map((obj: { release_date: Date }, index: number) => {
                    return { ...obj, release_date: new Date(obj.release_date), id: index + 1 };
                });
                dispatch({ type: 'GET_DATA', payload: filmdData });
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                console.log(err);
                dispatch({ type: 'ERROR' });
            });
        return () => {
            controller.abort();
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
        dispatch({ type: 'MAKE_REQUEST' });
        const sortedResult = state.films.sort((objA, objB) => objA.episode_id - objB.episode_id);
        dispatch({ type: 'GET_DATA', payload: sortedResult });
    };

    return { state, sortByyearListner, sortByEpListner };
};

export type useFetchType = ReturnType<typeof useFetch>;
