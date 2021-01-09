import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) => {

    const { user } = useSelector((state) => state.rbook.user);

    return (
    <Route
        {...rest}
        render={props =>
            user && user.role === 1 ? (
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

export default AdminRoute;
