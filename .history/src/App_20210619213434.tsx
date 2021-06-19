import React, { FC } from 'react';
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import NoMatch from './page/NoMatch';
import FilmData from './page/FilmData';

const App: FC = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/film/:id">
                    <FilmData />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
