import React from 'react'
import "../Admin.css"
import "./AddUser.css"
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Col, Container, Row } from 'react-bootstrap';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function AddUser() {
  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <br></br>
      <br></br>
      <br></br>
      <div className="container_admin">
        <Sidebar/>
      <div className='AddUserPage'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
        <Container>
            <Row>
            <Col lg='6'>
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="Username"/>
            </div>

            <div className="newUserItem">
                <label>First Name</label>
                <input type="text" placeholder="First Name"/>
            </div>

            <div className="newUserItem">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name"/>
            </div>

            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="Email"/>
            </div>
            </Col>
            <Col lg='6'>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+4077067308"/>
            </div>

            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="Password"/>
            </div>

            <div className="newUserItem">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password"/>
            </div>

            </Col>
            <Col lg="12" className="d-flex justify-content-center">
                <button className="newUserButton">Create</button>
            </Col>
            </Row>
        </Container>
        </form>
      </div>
    </div>
</div>
  )
}