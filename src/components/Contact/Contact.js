

import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

import "./Contact.css"
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log('Form Data:', formData);
        setFormData(({
            name: '',
            email: '',
            phone: '',
        }));
    };
    return (
        <>
            <div>
                <h3 className='prdheadstl'>
                    Contact Us
                </h3>
                <Container>
                    <Form onSubmit={handleSubmit} className='formposstl' id='temp'>
                        <Row>
                            <Col lg={8}>
                                <Form.Group controlId="name">
                                    <Form.Label className="labelstl">Name</Form.Label>
                                    <Form.Control
                                        size='lg'
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={8}>
                                <Form.Group controlId="email">
                                    <Form.Label className="labelstl">Email ID</Form.Label>
                                    <Form.Control
                                        size='lg'
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={8}>
                                <Form.Group controlId="phone">
                                    <Form.Label className="labelstl">Phone Number</Form.Label>
                                    <Form.Control
                                        size='lg'
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div >
                            <Row style={{ marginTop: '1.5rem', }}>
                                <Col>
                                    <Button variant="primary" type="submit" className='frmbtnstl'>
                                        Submit
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary" type="reset" className='frmbtnstl' >
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Contact;
