import React from 'react'
import "./NewUser.css"
import "../Admin.css"
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Col,Row, Container } from 'react-bootstrap';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function NewUser() {
  return (
    <div>
    <NavbarAdmin></NavbarAdmin>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
      <Sidebar/>
      <div className='NewUserPage'>
        <div className="userTitleContainer">
          <Container>
            <Row>
              <Col lg='10'>
                <h1 className='userTitle'>Edit User</h1>
              </Col>
              <Col lg='2' className='d-flex justify-content-end'>
                <Link style={{textDecoration: 'none'}} to="/adminPage/AddUser">
                  <button className="userAddButton">Create</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='userContainer'>
        <Container>
          <Row>
          <Col lg="4" className="mb-2">
          <div className="userShow">
            <div className="userShowTop">
              <img src="../../../images/avatar.jpg" alt="NotFound" className="userShowImg"/>
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  Anna Becker
                </span>
                <span className="userShowUserTitle">
                  Regular User
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck99</span>
              </div>

              <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>

              <span className="userShowTitle">Contact Details</span>

              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">+40770688389</span>
              </div>

              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>

            </div>
          </div>
          </Col>
          <Col lg="8">
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder="annabeck99" className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input type="text" placeholder="Anna" className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input type="text" placeholder="Becker" className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder="+40770688389" className="userUpdateInput"></input>
                </div>

              </div>

              <div className="userUpdateRight">
                <div className="userUpdatePassword">

                  <div className="userUpdateItem">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter Password" className="userUpdateInput"></input>
                  </div>

                  <div className="userUpdateItem">
                    <label>Repeat Password</label>
                    <input type="password" placeholder="Cofirm Password" className="userUpdateInput"></input>
                  </div>
                </div>

                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
          </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  </div>
  )
}



