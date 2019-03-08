import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../App';
import Features from '../components/Featurs/Features';

const Routers = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={App} />
            <Route path = "/features" component={Features} />
            {/* <Route exact path = "/" component={App} /> */}
        </Switch>
    </BrowserRouter>
)

export default Routers;