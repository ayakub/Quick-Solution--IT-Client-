import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvidor';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContex);
    const location = useLocation()
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children
};

export default PrivateRoute;