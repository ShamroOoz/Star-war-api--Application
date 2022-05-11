import React, { useState } from 'react';
import { Film, Alert, Spinner, SearchForm } from '../Components';
import { useFetch, useFetchType } from '../Hooks/useFetch';
import { FilmType, ParamsType } from '../types';

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
                    <button type="button" onClick={() => sortByyearListner()} className="p-4 text-white bg-black">
                        Sort By : Year
                    </button>
                    <button type="button" onClick={() => sortByEpListner()} className="p-4 text-white bg-black">
                        Sort By : Episode
                    </button>
                </div>

                {loading && <Spinner />}
                {error && <Alert reason={error} />}
                {!films.length && (
                    <div className="flex items-center justify-center mt-3 text-lg text-red-500 animate-pulse">
                        No result found....
                    </div>
                )}
                {films.length > 0 && films.map((film: FilmType, index: React.Key) => <Film key={index} film={film} />)}
            </div>
        </div>
    );
};

export default Home;
