import React from 'react';
import { Button, Container, Image, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assests/logo.jpg'
import { useContext } from 'react';
import { AuthContex } from '../../../Contex/AuthProvidor';
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg='success' className='nav-container' variant="white">
                <Container fluid className='d-flex justify-content-between mx-2 mt-3'>
                    <Navbar.Brand href="#home" className='d-flex align-items-center'><img style={{ height: '60px' }} src={logo} alt="" /> <h3 className='ms-2 text-white'>Learn CSE </h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link ><Link className='nav-items' to='/'>Home</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-items' to='/course'>Course </Link></Nav.Link>
                            <Nav.Link ><Link className='nav-items' to='/faq'>FAQ </Link></Nav.Link>
                            <Nav.Link ><Link className='nav-items' to='/blog'>Blog </Link></Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {user?.uid ?
                                    <>
                                        <span> {user?.displayName}</span>
                                        <Button onClick={handleSignOut} className='ms-3' variant="light">Log Out</Button>{' '}
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button variant="outline-light">Login</Button></Link>
                                        <Link className='ms-2' to='/register'>     <Button variant="outline-light">Register</Button></Link>
                                    </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '40px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    >

                                    </Image>
                                    :
                                    <FaUser></FaUser>

                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar bg="light" expand="lg">
                <Container fluid className='d-flex justify-content-between  hnkohtyhu mt-3'>
                    <div>
                        <Navbar.Brand href="#" className='d-flex align-items-center'><img style={{ height: '60px' }} src={logo} alt="" /> <h3 className='text-dark ms-3'>Learn CSE </h3></Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                           
                                    <Link to='/'>Course </Link>
                                    <Link to='/faq'>FAQ </Link>
                                    <Link to='/blog'>Blog </Link>
                              
                                <Link to='/register'>Register </Link>
                                <Link to='/login'>Log in</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;