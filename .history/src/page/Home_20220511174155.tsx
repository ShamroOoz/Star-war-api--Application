import React, { useState } from 'react';
import { Film, Alert, Spinner, SearchForm } from '../Components';
import { useFetch, useFetchType } from '../Hooks/useFetch';
import { ParamsType } from '../types';

const Home: React.FC = (): JSX.Element => {
    const [params, setparam] = useState({} as ParamsType);
    const { films, loading, error } = useFetch(params) as useFetchType;

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
                {loading && <Spinner />}
                {error && <Alert reason={error} />}
                {!films.length && (
                    <div className="flex items-center justify-center mt-3 text-lg text-red-500 animate-pulse">
                        No result found....
                    </div>
                )}
                {films && films.map((film, index) => <Film key={index} film={film} id={index + 1} />)}
            </div>
        </div>
    );
};

export default Home;
