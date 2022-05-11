import React from 'react';
import { Link } from 'react-router-dom';
import { FilmProps } from '../types';

const Film: React.FC<FilmProps> = ({ film, id }: FilmProps): JSX.Element => {
    return (
        <div className="mt-4 transition duration-500 ease-in-out transform border border-yellow-200 rounded-lg shadow lg:flex hover:-translate-y-2 hover:scale-100 ">
            <div className="block h-full py-4 bg-black rounded-lg shadow-inner lg:w-2/12">
                <div className="tracking-wide text-center">
                    <div className="text-4xl font-bold text-white ">{film.episode_id}</div>
                    <div className="text-2xl font-normal text-white">Episode</div>
                </div>
            </div>
            <Link
                to={`/film/${id}`}
                className="w-full px-1 py-5 tracking-wide bg-white lg:w-11/12 xl:w-full lg:px-2 lg:py-2"
            >
                <div className="px-2 text-xl font-semibold text-center text-gray-800 lg:text-left">{film.title}</div>

                <div className="px-2 pt-1 text-sm font-medium text-center text-gray-600 lg:text-left">
                    Release Year - {film.release_date.toLocaleString('en-GB', { timeZone: 'UTC' })}
                </div>
            </Link>
            <Link
                to={`/film/${id}`}
                className="flex flex-row items-center justify-center w-full px-2 py-4 bg-white lg:w-1/3 lg:justify-end lg:px-0 "
            >
                <span className="px-4 mx-2 text-sm font-semibold leading-loose tracking-wider text-black transition duration-500 ease-in-out transform bg-yellow-200 rounded cursor-pointer hover:bg-yellow-400 hover:-translate-y-1 hover:scale-110 ">
                    Visit
                </span>
            </Link>
        </div>
    );
};

export default Film;
