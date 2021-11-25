import React from 'react';
import {Route, Switch} from "react-router-dom";
import {publicRoutes} from "./components/router/AppRoute";
import Header from "./components/header/header";


const App = () => {
    return (
        <div className={"App"}>
            <Header/>
            <Switch>
                {publicRoutes.map(({path, component}) => <Route key={path} path={path} component={component}/>)}
            </Switch>
        </div>
    );
};

export default App;