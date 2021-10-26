import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { publicListScreen, privateListScreen, OtherRoutes } from "./screenList";


const AppScreens = ({ authState, user }) => {

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
                    privateListScreen.map((screen) => {
                        // const array = screen.roles;
                        // if (!array.includes(user.role)) {
                        //     return <></>;
                        // }
                        return (
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
                        )
                    })
                }
                {
                    OtherRoutes.map((screen) => (
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