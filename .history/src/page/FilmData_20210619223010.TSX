import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import GetCharacter from '../Components/GetCharacter';

const BASE_URL = 'https://swapi.dev/api/films';

const FilmData: React.FC = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [data, dataSet] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const { data } = await axios(`${BASE_URL}/${id}`);
                dataSet(data);
            } catch (error) {
                console.log(error);
                history.push('/');
            }
        };
        fetchAPI();
    }, [id, history]);
    return (
        <div>
            {data && (
                <div className="flex flex-col items-center justify-center w-full mt-7">
                    <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg ">
                        <div className="px-8 py-4 mt-3">
                            <div className="flex flex-col mb-8">
                                <h2 className="mb-2 text-2xl font-semibold tracking-wide text-center text-gray-700">
                                    {data.title}
                                </h2>
                                <p className="text-base text-gray-500">{data.opening_crawl}</p>
                                <div className="mt-3 text-xl tracking-wide text-gray-700 ">
                                    Episode : {data.episode_id}
                                </div>
                                <div className="text-xl tracking-wide text-gray-700">
                                    Release date : {data.release_date}
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg">
                                <div className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <h4 className="mb-3 text-lg font-semibold">Cast:</h4>
                                        <table className="w-full max-w-4xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                                            <thead className="bg-gray-50">
                                                <tr className="text-left text-gray-600">
                                                    <th className="px-6 py-4 text-sm font-semibold uppercase">Name</th>
                                                    <th className="px-6 py-4 text-sm font-semibold uppercase">
                                                        Gender
                                                    </th>
                                                    <th className="px-6 py-4 text-sm font-semibold text-center uppercase">
                                                        Species
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {data.characters
                                                    .map((character, index) => (
                                                        <GetCharacter key={index} character={character} />
                                                    ))
                                                    .slice(0, 5)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4">
                                <Link
                                    to="/"
                                    className="block px-10 py-3 text-xs tracking-widest text-center transition duration-500 ease-in-out transform bg-yellow-200 rounded shadow text-blackuppercase hover:bg-yellow-400 focus:shadow-outline focus:outline-none hover:-translate-y-1 hover:scale-110 "
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilmData;
