import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PrivateDetails = () => {
    const privatdata = useLoaderData();
    console.log(privatdata)
    return (
        <div>
            <h3>Welcome ! you Our Premium Member</h3>
        </div>
    );
};

export default PrivateDetails;