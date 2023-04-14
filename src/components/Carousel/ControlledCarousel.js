import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./ControlledCarousel.css";
import { Col, Container, Row } from 'react-bootstrap';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel_container'>
        
    <Carousel.Item className='carousel_item_'>
          <Container fluid className='px-0 gx-0'>
            <Row noGutters className='d-flex gx-0'>
              <Col lg='8'>
                <img src="../../../images/frankfurt_review2.jpg" className="carousel_image" alt="First slide" />
              </Col>
              <Col lg='4' className='d-flex align-items-center carousel_caption'>
              <div>
                  <h3 className='carousel_title'>Frankfurt on Foot Walking Tour</h3>
                  <h5 className='carousel_subtitle'>Review from:</h5>
                  <div className="carousel_Show">
                    <Container fluid className='px-0 gx-0'>
                    <Row noGutters className='d-flex gx-0'>
                    <Col xs="4" className='d-flex justify-content-center col1_user'>
                        <img src="../../../images/profile_picture3.jpg" alt="NotFound" className="carousel_ShowImg"/>
                    </Col>
                    <Col xs="8" className='col2_user'>
                        <div className="carousel_ShowTopTitle">
                          <span className="carousel_ShowUsername">
                            Casiana Olteanu
                          </span>
                          <span className="carousel_ShowUserTitle">
                            Regular User
                          </span>
                          <div className="carousel_ShowInfo">
                            <PermIdentityIcon className="carousel_ShowIcon"/>
                            <span className="carousel_ShowInfoTitle">cassiana_123 </span>
                          </div>
                        </div>
                      </Col>
                      </Row>
                    </Container>
                  </div>

                  <p className='carousel_description'>" David was our guide, he is very pleasant, informative and funny. He took us through shortcuts that we wouldnt have taken on our own to experience the local living. We even went to the town market were I had lunch , best sausage ever! "</p>
               </div>
              </Col>
            </Row>
          </Container>
      </Carousel.Item> 



      <Carousel.Item className='carousel_item_'>
          <Container fluid className='px-0 gx-0'>
            <Row noGutters className='d-flex gx-0'>
              <Col lg='8'>
                <img src="../../../images/barcelona_review.jpg" className="carousel_image" alt="First slide" />
              </Col>
              <Col lg='4' className='d-flex align-items-center carousel_caption'>
              <div>
                  <h3 className='carousel_title'>Barcelona 3-day Guided Tour</h3>
                  <h5 className='carousel_subtitle'>Review from:</h5>
                  <div className="carousel_Show">
                    <Container fluid className='px-0 gx-0'>
                    <Row noGutters className='d-flex gx-0'>
                    <Col xs="4" className='d-flex justify-content-center col1_user'>
                        <img src="../../../images/profile_picture2.jpg" alt="NotFound" className="carousel_ShowImg"/>
                    </Col>
                    <Col xs="8" className='col2_user'>
                        <div className="carousel_ShowTopTitle">
                          <span className="carousel_ShowUsername">
                            Adrian Matei
                          </span>
                          <span className="carousel_ShowUserTitle">
                            Premium User
                          </span>
                          <div className="carousel_ShowInfo">
                            <PermIdentityIcon className="carousel_ShowIcon"/>
                            <span className="carousel_ShowInfoTitle">adrian_matei</span>
                          </div>
                        </div>
                      </Col>
                      </Row>
                    </Container>
                  </div>

                  <p className='carousel_description'>" What a breathtaking church, inside and out. We have been to Barcelona twice before but hadn't visited inside the church. We pre booked skip the queue with a guide, worked great. Would highly recommend booking tickets in advance with official websites for tickets to any of the sights. "</p>
               </div>
              </Col>
            </Row>
          </Container>
      </Carousel.Item> 



      <Carousel.Item className='carousel_item_'>
          <Container fluid className='px-0 gx-0'>
            <Row noGutters className='d-flex gx-0'>
              <Col lg='8'>
                <img src="../../../images/brasov_review.jpg" className="carousel_image" alt="First slide" />
              </Col>
              <Col lg='4' className='d-flex align-items-center carousel_caption'>
              <div>
                  <h3 className='carousel_title'>Dracula's Castle and Transylvania Day Trip</h3>
                  <h5 className='carousel_subtitle'>Review from:</h5>
                  <div className="carousel_Show">
                    <Container fluid className='px-0 gx-0'>
                    <Row noGutters className='d-flex gx-0'>
                    <Col xs="4" className='d-flex justify-content-center col1_user'>
                        <img src="../../../images/profile_picture1.jpg" alt="NotFound" className="carousel_ShowImg"/>
                    </Col>
                    <Col xs="8" className='col2_user'>
                        <div className="carousel_ShowTopTitle">
                          <span className="carousel_ShowUsername">
                            Anna Becker
                          </span>
                          <span className="carousel_ShowUserTitle">
                            Regular User
                          </span>
                          <div className="carousel_ShowInfo">
                            <PermIdentityIcon className="carousel_ShowIcon"/>
                            <span className="carousel_ShowInfoTitle">annabeck99</span>
                          </div>
                        </div>
                      </Col>
                      </Row>
                    </Container>
                  </div>

                  <p className='carousel_description'>" I loved the day with Serban, he has great energy and conveyed his love for Romania by giving us many information about the country and its culture. We even got to try home made Romanian beverage on the way back. "</p>
               </div>
              </Col>
            </Row>
          </Container>
      </Carousel.Item> 

    </Carousel>
    </>
  );
}

export default ControlledCarousel;