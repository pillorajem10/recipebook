import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { user } = useSelector((state) => state.rbook.user);
    
    return (
    <Route
        {...rest}
        render={props =>
            user ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                ></Redirect>
            )
        }
    />
  )
};

export default PrivateRoute;
