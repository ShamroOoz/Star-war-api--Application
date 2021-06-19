import React from 'react';
import { NavBar } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { FilmData, NoMatch, Home } from './page';

const App: React.FC = (): JSX.Element => {
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
