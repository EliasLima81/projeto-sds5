import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dastboard" >
                    <Dashboard/>
                </Route>
                <Route path="/" >
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;