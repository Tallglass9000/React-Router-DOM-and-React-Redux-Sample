import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import App from '../containers/App';
import About from '../containers/About';

export default() => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/about' component={About}/>
            </Switch>
        </Router>
    )
}