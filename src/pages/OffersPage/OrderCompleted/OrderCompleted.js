import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VerifiedIcon from '@mui/icons-material/Verified';
import "./OrderCompleted.css"

const OrderCompleted = () => 
{
  return <section>
  <br/>
  <br/>
  <br/>
  <br/>
    <Container>
        <Row className="align-items-center viewport-height">
            <Col lg='12' className='pt-5 text-center'>
                <div className="orderCompleted">
                    <VerifiedIcon className="svg_verify" style={{ fill: 'green'}}/>
                    <h1 className="mb-3 fw-semibold">Your order is completed</h1>
                    <h3 className="mb-4 fw-semibold">Thank you for travelling with us!</h3>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default OrderCompleted;