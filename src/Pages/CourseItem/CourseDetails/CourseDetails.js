import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const singleCourse = useLoaderData();
    const [course, SetCourse] = useState()

    const { id, image, price, rating, title, total_selling, description } = singleCourse;
    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => SetCourse(data))
    }, {})

    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col lg={4}>
                    {
                        course?.map(linkItem => <Link to={`/course/${linkItem.id}`}
                            key={linkItem.id}
                        ><Button className='w-100 mb-2' variant="outline-primary">{linkItem?.title}</Button></Link>)
                    }
                </Col>
                <Col lg={8}>
                    <Card className="">
                        <Card.Img style={{ height: '500px' }} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className='text-success'>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <h3 className='text-success'>ratings:{rating}</h3>
                                <h4 className='text-danger'>Course fee: {price} <span>k</span></h4>
                                <h5 className='text-success'>Total enroll:{total_selling}</h5>
                            </div>
                        </Card.Body>
                        <Card.Footer className='text-center' >
                            <Link to={`/course/private/${id}`} ><Button variant="success">Get Premium Access</Button></Link>
                        </Card.Footer>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;