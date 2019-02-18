//@flow

import React, {PureComponent} from 'react';
import {
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';

import {
    Header,
} from 'components/sections';

import {
    Main,
    Profile,
} from 'containers';

import './App.scss';

class App extends PureComponent<{}> {

    render() {
        return (
            <article>
                <Header/>

                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Main}
                    />
                    <Route
                        path="/profile/:id?"
                        component={Profile}
                    />
                    <Route component={Main}/>
                </Switch>

            </article>
        );
    }
}

export default withRouter(App);
