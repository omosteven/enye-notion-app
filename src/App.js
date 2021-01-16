import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Home} from "./containers/home";

import {Profile} from "./containers/profile";


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/profile*"
                        component={Profile}/>
                    <Route exact path="/"
                        component={Home}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
