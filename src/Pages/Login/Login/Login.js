import { Button } from "react-bootstrap";
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../../../Contex/AuthProvidor";

const Login = () => {
    const { signIn } = useContext(AuthContex)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className='mt-5 container mx-auto' style={{
            width: '350px'

        }}>
            < h2 className='text-center text-success' > Plese Log in!</h2>
            <Form onSubmit={handleSubmit}>
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