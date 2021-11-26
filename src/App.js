import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "./components/router/AppRoute";
import Header from "./components/header/header";
import {HOME_ROUTE} from "./utils/RoutesConsts";


const App = () => {
    return (
        <div className={"App"}>
            <Header/>
            <Switch>
                {authRoutes.map(({path, component}) => <Route key={path} path={path} component={component} exact/>)}
            </Switch>
            <Switch>
                {publicRoutes.map(({path, component}) => <Route key={path} path={path} component={component} exact/>)}
            </Switch>
            <Redirect to={HOME_ROUTE}/>
        </div>
    );
};

export default App;