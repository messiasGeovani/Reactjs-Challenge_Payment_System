import React from "react";
// router modules import
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
// navbar import
import { Navbar } from './UI/Navbar/Navbar'
// home page import
import { Home } from './pages/home/Home'
// clients page import
import { Clients } from './pages/clients/Clients'

const App = () => (
    <>
        <Navbar />
        <Router>
            <Switch>
                <Route exact="true" path="/">
                    <Home />
                </Route>
                <Route path="/clients">
                    <Clients />
                </Route>
            </Switch>
        </Router>
    </>
)

export { App }
