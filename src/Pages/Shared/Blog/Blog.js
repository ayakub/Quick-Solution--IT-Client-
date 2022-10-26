import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';



const Blog = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col lg='6' className='mt-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title>What is cors?</Card.Title>
                            <Card.Text>
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg='6 ' className='mt-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Why are using firebase, what other options</Card.Title>

                            <Card.Text>
                                Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it!
                                <Card.Subtitle className="mb-2 text-muted">other options</Card.Subtitle>
                                <li> Backendless</li>
                                <li>Kuzzle</li>
                                <li>Pubnub</li>
                                <li>Kumulos</li>


                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg='6' className='mt-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title>How does the private route work</Card.Title>

                            <Card.Text>
                                Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg='6' className='mt-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title>What is node? How does node work</Card.Title>

                            <Card.Text>
                                <p>  Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications.</p>
                                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;