import React from 'react'
import "./FeaturedItem.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Col, Container, Row } from 'react-bootstrap';

export default function FeaturedItem() {
  return (

    <div className='featured'>
    <Container className='mt-2'>
    <Row>
      <Col lg='4' className='mt-2'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2415</span>
            <span className='featureMoneyRate'>-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      </Col>
      <Col lg='4' className='mt-2'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$4415</span>
            <span className='featureMoneyRate'>-2.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      </Col>
      <Col lg='4' className='mt-2'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Costs</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2225</span>
            <span className='featureMoneyRate'>2.4 <ArrowUpwardIcon className="featuredIcon"/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      </Col>
    </Row>
    </Container>
    </div>


  )
}
