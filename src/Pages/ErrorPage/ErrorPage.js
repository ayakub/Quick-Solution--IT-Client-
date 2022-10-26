import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import erorImg from '../../assests/error.jpg'

const ErrorPage = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <Image className='text-center'
                    style={{ height: '500px' }}
                    src={erorImg}
                ></Image>

            </div>
            <div className='d-flex justify-content-center'>
                <Link to='/'> <Button variant="success">Back to home</Button></Link>
            </div>
        </>
    );
};

export default ErrorPage;