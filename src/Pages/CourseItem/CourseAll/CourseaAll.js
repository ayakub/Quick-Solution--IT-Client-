import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseaAll = ({ courses }) => {
    const { title, id, image } = courses;
    console.log(courses)
    return (
        <div >



            <Col>
                <Card >
                    <Card.Img style={{ height: '250px' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='mb-2'>{title}</Card.Title>
                        <Link to={`/course/${id}`}> <Button className='w-100' variant="success">Course Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default CourseaAll;