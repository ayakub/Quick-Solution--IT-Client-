import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaDownload } from 'react-icons/fa';

const ref = React.createRef();

const CourseDetails = () => {

    const singleCourse = useLoaderData();
    const [course, SetCourse] = useState()

    const { id, image, price, rating, title, total_selling, description } = singleCourse;
    useEffect(() => {
        fetch(' https://learn-cse-fundamentals-server.vercel.app/course')
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
                        ><Button className='w-100 mb-2 d-none d-lg-block d-md-block' variant="outline-primary">{linkItem?.title}</Button></Link>)
                    }
                </Col>
                <Col lg={8}>


                    <div className="App">

                        <Pdf targetRef={ref} filename="Course ">
                            {({ toPdf }) => <button className='border-0' onClick={toPdf}>Download <FaDownload className=' fs-3 mb-2 text-secondary text-right'></FaDownload></button>}
                        </Pdf>

                        <Card className="" ref={ref}>
                            <Card.Img className='p-3 bg-success border-rounded' style={{ height: '450px' }} variant="top" src={image} />
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

                    </div>


                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;