import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// Function Route
import MainRoute from './MainRoute'

// View
import Home from '../view/page/Home/Home'
import TableLocation from '../view/page/TableLocation/TableLocation';

const Route = ({component = Component, layout: Layout, ...rest}) => (
    <Router>
        <div className="App">
            <Switch>
                <MainRoute exact path="/" component={Home}/>

                <MainRoute path="/table-location" component={TableLocation} />
            </Switch>
        </div>
    </Router>
)

export default Route;