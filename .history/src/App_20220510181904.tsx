import React from 'react';
import { Layout } from './Components';
import { FilmData, NoMatch, Home } from './page';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="film/:id" element={<FilmData />}></Route>
                <Route path="*" element={<NoMatch />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
