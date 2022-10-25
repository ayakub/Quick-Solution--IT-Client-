import { Button } from "react-bootstrap";
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='mt-5 container mx-auto' style={{
            width: '350px'

        }}>
            < h2 className='text-center text-success' > Plese Log in!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p className='fs-5 text-dark '>Are You new user?  <Link to='/register'>Register</Link></p>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div >
    );
};

export default Login;