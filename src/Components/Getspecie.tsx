import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SpecieProps, SpecieType } from '../types';

const Getspecie: React.FC<SpecieProps> = ({ specie }: SpecieProps): JSX.Element => {
    const [data, dataSet] = useState<SpecieType | null>(null);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const { data } = await axios(specie);
                dataSet(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, [specie]);
    return (
        <React.Fragment>
            {data && (
                <tr>
                    <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                            <div>
                                <p className="">{data.average_height}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <p className="">{data.designation}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                        <p className="">{data.language}</p>
                    </td>
                </tr>
            )}
        </React.Fragment>
    );
};

export default Getspecie;
