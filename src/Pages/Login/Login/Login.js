import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../../../Contex/AuthProvidor";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import swal from "sweetalert";


const Login = () => {

    const [error, setError] = useState('')
    const providor = new GoogleAuthProvider()

    const gitProvidor = new GithubAuthProvider()


    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContex);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()


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
                form.reset()
                setError('')
                navigate(from, { replace: true })
                swal("Welcome!", "Login success!", "success");
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

    }


    const handleGoogleSign = () => {
        googleSignIn(providor)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                swal("Welcome!", "Login success!", "success");
            })
            .then(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleGitHubSignIn = () => {
        githubSignIn(gitProvidor)
            .then(result => {

                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                swal("Welcome!", "Login success!", "success");
            })
            .then(() => { })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='mt-5 container mx-auto mb-5' >
            < h2 className='text-center text-success' > Plese Log in!</h2>
            <Container>
                <Row>
                    <Col lg='3'></Col>
                    <Col lg='6'>
                        <Form onSubmit={handleSubmit} >
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
                            <p className='text-danger'>{error}</p>

                            <div className="d-flex">
                                <Button
                                    onClick={handleGoogleSign}
                                    variant="outline-primary"
                                    className='d-flex justify-content-center mb-3'>
                                    <FaGoogle className='me-2 fs-4'>
                                    </FaGoogle> SignIn Google
                                </Button>

                                <Button
                                    onClick={handleGitHubSignIn}
                                    variant="outline-primary"
                                    className='d-flex justify-content-center mb-3 ms-2'>
                                    <FaGithub className='me-2 fs-3'>
                                    </FaGithub>SignIn github</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col lg='3'></Col>
                </Row>
            </Container>


        </div >
    );
};

export default Login;