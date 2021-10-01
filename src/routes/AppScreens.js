import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { publicListScreen, privateListScreen } from "./screenList";


const AppScreens = ({ authState }) => {

    const location = useLocation();
    const { isLoggedIn } = authState;

    return (
        <>
            <Switch>
                {
                    publicListScreen.map((screen) => (
                        <Route exact path={screen.path} key={screen.id}>
                            {screen.component}
                        </Route>
                    ))
                }
                {
                    privateListScreen.map((screen) => (
                        <Route exact path={screen.path} key={screen.id}>
                            {
                                isLoggedIn ? 
                                    screen.component : 
                                    <Redirect 
                                        to={{
                                            pathname: "/",
                                            state: { from: location }
                                        }} 
                                    />
                            }
                        </Route>
                    ))
                }
            </Switch>
        </>
    )
};
export default AppScreens;