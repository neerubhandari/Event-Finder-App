import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar.js/Navbar';

function ProtectedRoute({ component: Component,Login, ...rest }) {
    console.log(Login)
    return (
        <div>
            <Route {...rest} render={(props) => {
                if (Login) return <Component {...rest} {...props} />
                else 
                return (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: {
                          from: props.location,
                        },
                      }}
                    />
                )
            }} />
        </div>
    )
}

export default ProtectedRoute;
