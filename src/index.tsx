/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import './scss/main.scss';
import * as ReactDOM from "react-dom";
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}></IndexRoute>  
            </Route>                  
        </Router>,
        document.getElementById("content")
);