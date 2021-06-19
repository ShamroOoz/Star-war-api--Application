import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

type Iprop = {
    handleparamchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    params: { search: string };
};

const SearchForm: React.FC<Iprop> = ({ handleparamchange, params }: Iprop): JSX.Element => {
    return (
        <div className="flex items-center justify-center w-full pt-2 text-gray-600">
            <div className="relative ">
                <input
                    className="h-10 px-5 pr-10 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring ring-yellow-300 focus:border-yellow-300"
                    type="search"
                    name="search"
                    placeholder="Search by title..."
                    value={params.search || ''}
                    onChange={handleparamchange}
                />
                <button type="submit" className="absolute top-3 right-3">
                    <SearchIcon className="w-4 h-4 text-gray-600 " />
                </button>
            </div>
        </div>
    );
};

export default SearchForm;
