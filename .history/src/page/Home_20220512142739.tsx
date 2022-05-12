import React, { useState } from 'react';
import { Film, Alert, Spinner, SearchForm } from '../Components';
import { useFetch, useFetchType } from '../Hooks/useFetch';
import { FilmType, ParamsType, isEmpty } from '../types';

const Home: React.FC = (): JSX.Element => {
    const [params, setparam] = useState({} as ParamsType);
    const {
        state: { films, loading, error },
        sortByyearListner,
        sortByEpListner,
    } = useFetch(params) as useFetchType;

    const handleparamchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const param = e.target.name;
        const value = e.target.value;
        setparam((prevparams) => {
            return { ...prevparams, [param]: value };
        });
    };

    return (
        <div>
            <SearchForm handleparamchange={handleparamchange} params={params} />
            <div className="px-2">
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => sortByyearListner()}
                        className="py-1.5 px-4 transition-colors bg-green-600 border active:bg-green-800 font-medium border-green-700 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                    >
                        Sort By : Year
                    </button>
                    <button
                        type="button"
                        onClick={() => sortByEpListner()}
                        className="py-1.5 px-4 transition-colors bg-gray-50 border active:bg-blue-800 font-medium border-gray-200 hover:text-white text-blue-600 hover:border-blue-700 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    >
                        Sort By : Episode
                    </button>
                </div>
                {loading && <Spinner />}
                {error && <Alert reason={error} />}
                {isEmpty(params) && films.length <= 0 && (
                    <div className="flex items-center justify-center mt-3 text-lg text-red-500 animate-pulse">
                        No result found....
                    </div>
                )}
                {films.length > 0 && films.map((film: FilmType) => <Film key={film.id} film={film} />)}
            </div>
        </div>
    );
};

export default Home;
