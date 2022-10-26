import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PrivateDetails = () => {
    const privatdata = useLoaderData()

    return (
        <div>
            <img src={privatdata.image} alt="" />
        </div>
    );
};

export default PrivateDetails;