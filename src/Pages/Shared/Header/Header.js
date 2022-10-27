import React from 'react';
import { Button, Container, Image, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assests/logo.jpg'
import { useContext } from 'react';
import { AuthContex } from '../../../Contex/AuthProvidor';
import { FaToggleOff, FaToggleOn, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import swal from 'sweetalert';
const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    // toggle state

    const [toogle, setToogle] = useState(false)

    const handleToogle = () => {
        setToogle(!toogle)
    }

    const handleSignOut = () => {
        logOut()
            .then(() => {
                swal("log out!", "successfully!", "success");
            })
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
                            <Nav.Link >

                                {user?.uid ?

                                    <Button onClick={handleSignOut} className='ms-3' variant="light">Log Out</Button>

                                    :
                                    <>
                                        <Link to='/login'><Button variant="outline-light">Login</Button></Link>
                                        <Link className='ms-2' to='/register'>     <Button variant="outline-light">Register</Button></Link>
                                    </>
                                }

                            </Nav.Link>
                            <Nav.Link eventKey={2} >

                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '40px' }}
                                        roundedCircle
                                        title={user?.displayName}
                                        src={user?.photoURL}
                                    >

                                    </Image>
                                    :
                                    <FaUser className='fs-2 text-info'></FaUser>

                                }
                                <Button className=' border-0 bg-success  ms-4 px-3' onClick={handleToogle}>{toogle ? <FaToggleOff className='fs-1  border-0' /> : <FaToggleOn className='fs-1  border-0' />}</Button>



                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;