import React from 'react'
import './CommonSection.css'
import { Col, Container, Row } from 'react-bootstrap';

const CommonSection = ({title}) => {
    return (
        <div>
            <section className="common__section">
                <Container>
                <Row>
                    <Col lg='12'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
    )
}

export default CommonSection;