import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import Getspecie from './Getspecie';
import { CharacterProps, CharacterType } from '../types';

const GetCharacter: React.FC<CharacterProps> = ({ character }: CharacterProps): JSX.Element => {
    const [data, dataSet] = useState<CharacterType | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const { data } = await axios(character);
                dataSet(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, [character]);
    return (
        <React.Fragment>
            {data && (
                <tr>
                    <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                            <div>
                                <p className="">{data.name}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <p className="">{data.gender}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                        {data.species.length <= 0 ? (
                            <div className="text-red-600 focus:outline-none">No Record</div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className="text-purple-800 hover:underline focus:outline-none"
                            >
                                Show
                            </button>
                        )}
                    </td>
                    <Modal show={showModal} onClose={() => setShowModal(false)} title={data.name}>
                        <table className="w-full mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg whitespace-nowrap">
                            <thead className="bg-gray-50">
                                <tr className="text-left text-gray-600">
                                    <th className="px-6 py-4 text-sm font-semibold uppercase">Average Height</th>
                                    <th className="px-6 py-4 text-sm font-semibold uppercase">Designation</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-center uppercase">Language</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {data.species.length >= 0 &&
                                    data.species.map((specie, index) => <Getspecie key={index} specie={specie} />)}
                            </tbody>
                        </table>
                    </Modal>
                </tr>
            )}
        </React.Fragment>
    );
};

export default GetCharacter;
