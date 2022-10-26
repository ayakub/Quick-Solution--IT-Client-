import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css'
import pic from '../../assests/home2.webp'

const Home = () => {
    return (
        <Image
            fluid
            src={pic}>

        </Image>
    );
};

export default Home;