import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const PrivateDetails = () => {
    const privatedata = useLoaderData();
    const { image, title, description } = privatedata
    return (
        <div className='mt-5'>
            <h3 className='text-center text-success mb-5'>Welcome !Now you Our Premium Member</h3>
            <div>
                <Container>
                    <Row>
                        <Col lg='3' md='2'>
                        </Col>

                        <Col lg='6' md='8' className='d-flex justify-content-center'>
                            <Card>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {description}
                                    </Card.Text>
                                    <div className='mt-3 d-flex justify-content-center mb-5' >
                                        <Link to='/course'> <Button variant="success">Go Course</Button>{' '}</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='2' className='mb-5'>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default PrivateDetails;