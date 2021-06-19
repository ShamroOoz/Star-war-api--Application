import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { reducer } from '../Reducer/Reduce';
import { StateType, ParamsType, BASE_URL, initialState } from '../types';

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
                console.log(err);
                dispatch({ type: 'ERROR' });
            });
        return () => {
            cancelToken1.cancel();
        };
    }, [params]);

    return state;
};

export type useFetchType = ReturnType<typeof useFetch>;
