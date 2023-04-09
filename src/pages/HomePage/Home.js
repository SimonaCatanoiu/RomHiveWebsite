import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import ServiceList from "./Services/ServiceList";
import Footer from "../../components/Footer/Footer.js"

const Home = () => 
{

  return <>
    <br/>
    <br/>
    <br/>
    <br/>
    <section>
      <Container>
        <Row>
          <Col lg='6' className="col-with-border">
            <div className = "hero_content">
              <div className="hero_subtitle d-flex align-items-center justify-content-center">
                <img src="../../../images/slogan2.png" alt="Image not found"/>
              </div>
              <h1>The world is a beautiful place to explore.  
                <span className="highlight"> Let's go on an adventure</span>
              </h1>
              <p>
              We are dedicated to helping you explore the world and make unforgettable memories. With our passion for travel and extensive industry knowledge, we aim to provide exceptional service and create personalized experiences tailored to your unique preferences. From luxury escapes to budget-friendly adventures, we offer a wide range of destinations and activities to choose from. We believe that travel is not just a way to escape routine, but also an opportunity to expand your horizons, learn new things, and connect with different cultures. So whether you're a seasoned traveler or a first-timer, let us help you discover the beauty and diversity of our world. Let's start planning your dream trip today!              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box">
              <img src="../../../images/diving.jpg" alt="Image not found"/>
            </div> 
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-4">
              <img src="../../../images/picnic.jpg" alt="Image not found"/>
            </div> 
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-5">
              <img src="../../../images/backpack.jpg" alt="Image not found"/>
            </div> 
          </Col>
          <SearchBar></SearchBar>
        </Row>
      </Container>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>
    
    
    <section>
      <Container>
        <Row className="align-items-center row_service">
          <Col lg='3' my='4'>
            <h2 className="serives__title">We offer our best services</h2>
          </Col>
          <ServiceList></ServiceList>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <h2 className="experience__title">With our experience <br/> we will serve you</h2>
              <p>In the past year alone, we've taken 7000 travelers on the trip of a lifetime, and we've got the numbers to prove it. With over 1000 exciting activities under our belt, we're constantly seeking out new and thrilling ways to explore the world. </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center justify-content-center gap-5">
              <div className="counter__box">
                <span>20k+</span>
                <h6>Successful Trips</h6>
              </div>
              <div className="counter__box">
                <span>4k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>3</span>
                <h6>Years Of Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img mb-4">
              <img src="../../../images/broker.png" alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer></Footer>

    </>
}

export default Home;