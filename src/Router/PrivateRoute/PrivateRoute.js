import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvidor';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const location = useLocation()

    if (loading) {
        return <div className='d-flex justify-content-center mt-5'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children
};

export default PrivateRoute;