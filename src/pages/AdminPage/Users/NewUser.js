import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import "./NewUser.css"
import "../Admin.css"
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Col,Row, Container } from 'react-bootstrap';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import {BASE_URL} from '../../../utils/config.js'

export default function NewUser() {
  
  const { id } = useParams();
  const user_id = id;
  const [userData,setUserdata]=useState(null)
  const [errorFetch,setError]=useState(null)

  useEffect(() => {
      fetch(`${BASE_URL}/users/getuser/${user_id}`, { credentials: 'include' })
        .then(response => response.json())
        .then(userData => {
          setUserdata(userData);
        })
        .catch(error => {
          console.error(error);
          setError(error);
        });
  }, [user_id]);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [new_password, setNew_Password] = useState('');

  useEffect(() => {
    if (userData?.data?.username) {
      setUsername(userData.data.username);
    }
    if (userData?.data?.email) {
      setEmail(userData.data.email);
    }
    if (userData?.data?.firstname) {
      setFirstName(userData.data.firstname);
    }
    if (userData?.data?.lastname) {
      setLastName(userData.data.lastname);
    }
    if (userData?.data?.phone) {
      setPhone(userData.data.phone);
    }
    if (userData?.data?.date_of_birth) {
      const date = new Date(userData.data.date_of_birth);
      const formattedDate = date.toISOString().split('T')[0]; // "2023-05-10"
      setBirthdate(formattedDate);
    }
  }, [userData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('new_password', new_password);
    console.log([...formData.entries()]);
    try {
        const response = await fetch(`${BASE_URL}/users/updateUserAdmin/${user_id}`, {
          method: 'POST',
          body: formData,
          credentials: 'include',
        });
        const data = await response.json();
        if(data.success===false)
          alert("Passwords don't match! Not updated.")
        window.history.replaceState(null, null, window.location.href);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
    
    if (errorFetch) {
      return <div><br/><br/><br/><br/><p>Error: {errorFetch.message}</p></div>;
}

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
                  {firstname} {lastname}
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
                <span className="userShowInfoTitle">{username}</span>
              </div>

              <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">{birthdate}</span>
              </div>

              <span className="userShowTitle">Contact Details</span>

              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">{phone}</span>
              </div>

              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">{email}</span>
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
                  <input type="text" value={username} onChange={event => setUsername(event.target.value)} className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input type="text" value={firstname} onChange={event => setFirstName(event.target.value)} className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input type="text" value={lastname} onChange={event => setLastName(event.target.value)} className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" value={email} onChange={event => setEmail(event.target.value)} className="userUpdateInput"></input>
                </div>

                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" value={phone} onChange={event => setPhone(event.target.value)} className="userUpdateInput"></input>
                </div>

              </div>

              <div className="userUpdateRight">
                <div className="userUpdatePassword">

                  <div className="userUpdateItem">
                    <label>New Password</label>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} className="userUpdateInput"></input>
                  </div>

                  <div className="userUpdateItem">
                    <label>Repeat Password</label>
                    <input type="password" value={new_password} onChange={event => setNew_Password(event.target.value)} className="userUpdateInput"></input>
                  </div>
                </div>

                <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
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



