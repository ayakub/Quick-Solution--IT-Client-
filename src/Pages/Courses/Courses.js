import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseaAll from '../CourseItem/CourseAll/CourseaAll';
import SideNav from '../CourseItem/SideNav/SideNav';

const Courses = () => {
    const allCourses = useLoaderData()
    return (
        <div>

            <Container className='mt-5'>
                <Row>
                    <Col lg={3}>
                        <h3 className='text-center text-success' >Our Courses</h3>
                        <SideNav></SideNav>
                    </Col>

                    <Col lg={9}>
                        <Row xs={1} md={2} lg={2} className="g-4 mb-5">
                            {allCourses?.map(courses => <CourseaAll
                                key={courses.id}
                                courses={courses}
                            ></CourseaAll>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Courses;