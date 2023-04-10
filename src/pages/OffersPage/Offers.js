import React from "react";
import CommonSection from "./CommonSection/CommonSection";
import Footer from "../../components/Footer/Footer.js"
import OfferList from "./OfferCard/OfferList"
import './Offers.css'
import { Container, Row } from "react-bootstrap";

const Offers = () => 
{
  return <div>
    <br></br>
    <br></br>
    <br></br>
    <CommonSection title={"All Tours"}></CommonSection>
    <Container>
    <Row>
        <OfferList></OfferList>
    </Row>
    </Container>
    <Footer></Footer>
  </div>
}
export default Offers;