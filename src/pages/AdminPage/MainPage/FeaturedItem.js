import React,{useState,useEffect} from 'react'
import "./FeaturedItem.css"
import { Col, Container, Row } from 'react-bootstrap';
import {BASE_URL} from '../../../utils/config.js'

export default function FeaturedItem() {
  const [revenue, setRevenue] = useState(0);
  const [numSales, setNumSales] = useState(0);
  const [numUsers, setNumUsers] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch revenue data
        const revenueResponse = await fetch(`${BASE_URL}/statistics/revenue`,{ credentials: "include"});
        const revenueData = await revenueResponse.json();
        setRevenue(revenueData.data[0].totalRevenue);

        // Fetch number of sales data
        const salesResponse = await fetch(`${BASE_URL}/statistics/sales`,{ credentials: "include"});
        const salesData = await salesResponse.json();
        setNumSales(salesData.data[0].totalSales);

        // Fetch number of new users data
        const usersResponse = await fetch(`${BASE_URL}/statistics/users`,{ credentials: "include"});
        const usersData = await usersResponse.json();
        setNumUsers(usersData.monthlyUsers);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  return (

    <div className='featured'>
    <Container className='mt-2'>
    <Row>
      <Col lg='4' className='mt-2'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>${revenue}</span>
          </div>
          <span className='featuredSub'>Revenue from this month</span>
      </div>
      </Col>
      <Col lg='4' className='mt-2'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Number of Sales</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>{numSales}</span>
          </div>
          <span className='featuredSub'>Sales from this month</span>
      </div>
      </Col>
      <Col lg='4' className='mt-2'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Number of New Users</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>{numUsers}</span>
          </div>
          <span className='featuredSub'>Users from this month</span>
      </div>
      </Col>
    </Row>
    </Container>
    </div>


  )
}
