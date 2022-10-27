import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../Contex/AuthProvidor';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import swal from 'sweetalert';

const Register = () => {

    // contex
    const
        {
            createUser,
            googleSignIn,
            githubSignIn,
            updateUserProfile
        } =
            useContext(AuthContex);


    const [error, setError] = useState('')
    const navigate = useNavigate()



    const providor = new GoogleAuthProvider();
    const gitProvidor = new GithubAuthProvider();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                handleUpdateProfile(name, photoURL)
                console.log(user)
                setError('')
                navigate('/')
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
            })
            .then(error => {
                console.error(error)
                navigate('/')
                swal("Welcome!", "Login success!", "success");
            })
    }
    const handleGitHubSignIn = () => {
        githubSignIn(gitProvidor)
            .then(result => {

                const user = result.user;
                console.log(user);
                navigate('/')
                swal("Welcome!", "Login success!", "success");

            })
            .then(error => {
                console.error(error)
            })
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error)

            })
    }
    return (
        <div className=' bg-secondary'>
            <h2 className='text-center pt-5 text-light'>Plese Registration now!</h2>
            <Container >
                <Row>
                    <Col lg='3'></Col>
                    <Col lg='6'>

                        <Form className='mt-3  container mx-auto' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control name='name' type="text" placeholder="Full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control name='photoURL' type="name" placeholder="PhotoURL" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                            </Form.Group>
                            <p className='fs-5 text-light'>Have a Already Account?  <Link to='/login' className='text-dark'>login</Link></p>

                            <h3 className='text-danger'>{error}</h3>
                            <Button variant="light" type="submit">
                                Submit
                            </Button>
                            <div className='d-flex align-items-center mt-3'>

                                {/* google sign in button */}

                                <Button
                                    onClick={handleGoogleSign}
                                    variant="outline-light"
                                    className='d-flex justify-content-center mb-3'>
                                    <FaGoogle className='me-2 fs-4'>
                                    </FaGoogle> SignIn Google
                                </Button>

                                {/* github sign in  */}

                                <Button
                                    onClick={handleGitHubSignIn}
                                    variant="outline-light"
                                    className='d-flex justify-content-center mb-3 ms-2'>
                                    <FaGithub className='me-2 fs-3'>
                                    </FaGithub>SignIn github
                                </Button>
                            </div>


                        </Form>
                    </Col>
                    <Col lg='3'></Col>
                </Row>
            </Container>

        </div >
    );
};

export default Register;