import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Contex/AuthProvidor';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContex);

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
                console.log(user)
            })
            .catch(error => {
                console.error(error);
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
            })
    }
    const handleGitHubSignIn = () => {
        githubSignIn(gitProvidor)
            .then(result => {

                const user = result.user;
                console.log(user);
            })
            .then(error => {
                console.error(error)
            })
    }
    return (
        <div className='mt-4'>
            <h2 className='text-center text-success'>Plese Registration now!</h2>
            <Form className='mt-3  container mx-auto' style={{
                width: '350px'
            }} onSubmit={handleSubmit}>
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
                <p className='fs-5 text-dark'>Have a Already Account?  <Link to='/login'>login</Link></p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='d-flex'>
                    <Button onClick={handleGoogleSign} variant="outline-primary" className='d-flex justify-content-center mb-3'><FaGoogle ></FaGoogle></Button>
                    <Button onClick={handleGitHubSignIn} variant="outline-primary" className='d-flex justify-content-center mb-3 ms-2'><FaGithub></FaGithub></Button>
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

        </div >
    );
};

export default Register;