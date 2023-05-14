import React,{useState,useContext,useEffect} from 'react'
import './EditProfile.css'
import { Col,Row, Container } from 'react-bootstrap';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Footer from "../../components/Footer/Footer.js"

import {BASE_URL} from '../../utils/config.js'
import {AuthContext} from './../../context/AuthContext.js'

export default function EditProfile() {
  const {user} = useContext(AuthContext)

  //get data for user
  const [userData,setUserdata]=useState(null)
  const [errorFetch,setError]=useState(null)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && user._id) {
      setLoading(true);
      fetch(`${BASE_URL}/users/getuser/${user._id}`, { credentials: 'include' })
        .then(response => response.json())
        .then(userData => {
          setLoading(false);
          setUserdata(userData);
        })
        .catch(error => {
          console.error(error);
          setError(error);
          setLoading(false);
        });
    }
  }, [user]);

  
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("../../../images/avatar.jpg");
  const [filePathShow, setFileLink] = useState("../../../images/avatar.jpg");
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
    if (userData?.data?.photo) {
      setFilePath(userData.data.photo);
    }
  }, [userData]);

  useEffect(() => {
    async function fetchImage() {
      if (filePath !== "../../../images/avatar.jpg") {
        try {
          const imagename = filePath.split('/').pop();
          const response = await fetch(`${BASE_URL}/images/img/${imagename}`);
          const data = await response.blob();
          const imageUrl = URL.createObjectURL(data);
          setFileLink(imageUrl);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchImage();
  }, [filePath]);



  const handleFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileLink(URL.createObjectURL(selectedFile));
    } else if (userData.photo) {
      setFileLink(userData.photo);
    } else {
      setFileLink("../../../images/avatar.jpg");
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('phone', phone);
    formData.append('birthdate', birthdate);
    formData.append('password', password);
    formData.append('new_password', new_password);
    
    if (file) {
      formData.append('profilePicture', file);
    }
   
    try {
      const response = await fetch(`${BASE_URL}/users/updateUser/${user._id}`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      await response.json();
      window.history.replaceState(null, null, window.location.href);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  
  if (loading) {
    return <div><br/><br/><br/><br/><h4>Loading...</h4></div>;
  }
 if (errorFetch) {
    return <div><br/><br/><br/><br/><p>Error: {errorFetch.message}</p></div>;
  }
  return (
    <>
      <br/>
      <br/>
      <br/>
      <div className="container_profile">
      <div className='EditProfilePage'>
        <div className="TitleUserContainer">
          <Container>
            <Row className='d-flex align-items-center'>
              <Col lg='10'>
                <h1 className='PageTitle'>Edit Profile</h1>
              </Col>
              <Col lg='2' className='d-flex justify-content-end'>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='userEditContainer'>
        <Container>
          <Row className='d-flex align-items-center'>
          <Col lg="3" className="mb-2">
          <div className="userEditShow">
            <div className="userEditShowTop">
              <img src={filePathShow} alt="NotFound" className="userEditShowImg"/>
              <div className="userEditShowTopTitle">
                <span className="userEditShowUsername">
                {userData && userData.data && `${userData.data.firstname} ${userData.data.lastname}`}
                </span>
                <span className="userEditShowUserTitle">
                  Regular User
                </span>
              </div>
            </div>
            <div className="userEditShowBottom">
              <span className="userShowTitle">Account Details</span>
              
              <div className="userEditShowInfo">
                <PermIdentityIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">{userData && userData.data && userData.data.username}</span>
              </div>

              <div className="userEditShowInfo">
                <CalendarTodayIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">{birthdate} </span>
              </div>

              <span className="userEditShowTitle">Contact Details</span>

              <div className="userEditShowInfo">
                <PhoneAndroidIcon className="userEditShowIcon"/>
                <span className="userEditShowInfoTitle">{userData && userData.data && userData.data.phone}</span>
              </div>

              <div className="userEditShowInfo">
                <MailOutlineIcon className="userEditShowIcon"/>
                <span className="userEditShowInfoTitle">{userData && userData.data && userData.data.email}</span>
              </div>

            </div>
          </div>
          </Col>
          <Col lg="9">
          <div className="userEditUpdate">
            <span className="userEditUpdateTitle">Edit Details</span>
            <form className="userEditUpdateForm">
              <div className="userEditUpdateLeft">
                
                <div className="userEditUpdateItem">
                  <label>Username</label>
                  <input type="text" value={username} onChange={event => setUsername(event.target.value)} className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>First Name</label>
                  <input type="text" value={firstname} onChange={event => setFirstName(event.target.value)} className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>Last Name</label>
                  <input type="text" value={lastname} onChange={event => setLastName(event.target.value)} className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>Email</label>
                  <input type="text" value={email} onChange={event => setEmail(event.target.value)} className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>Phone</label>
                  <input type="text" value={phone} onChange={event => setPhone(event.target.value)} className="userEditUpdateInput"></input>
                </div>

              </div>

              <div className="userEditUpdateRight">
                <div className="userEditUpdatePassword">

                <div className="userEditUpdateItem">
                    <label>Date of Birth</label>
                    <input type="date" value={birthdate} onChange={event => setBirthdate(event.target.value)} className="userEditUpdateInput"></input>
                  </div>

                  <div className="userEditUpdateItem">
                    <label>New Password</label>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter Password" className="userEditUpdateInput"></input>
                  </div>

                  <div className="userEditUpdateItem">
                    <label>Repeat Password</label>
                    <input type="password" value={new_password} onChange={event => setNew_Password(event.target.value)} placeholder="Cofirm Password" className="userEditUpdateInput"></input>
                  </div>

                  <div className="userEditUpdateItem">
                    <label>Choose Profile Picture:</label>
                    <label for="file-upload" class="custom-file-upload">
                    <DriveFolderUploadIcon/>Upload
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileSelected}/>
                  </div>
                </div>

                <button className="userEditUpdateButton" onClick={handleSubmit}>Update</button>
              </div>
            </form>
          </div>
          </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}
