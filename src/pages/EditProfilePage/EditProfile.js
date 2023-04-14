import React,{useState} from 'react'
import './EditProfile.css'
import { Col,Row, Container } from 'react-bootstrap';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Link } from 'react-router-dom';

export default function EditProfile() {

  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("../../../images/avatar.jpg");
  
  const handleFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePath(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setFilePath("../../../images/avatar.jpg");
    }
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
                <Link style={{textDecoration: 'none'}} to="/EditProfile">
                  <button className="userDeleteButton">Delete Account</button>
                </Link>
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
              <img src={filePath} alt="NotFound" className="userEditShowImg"/>
              <div className="userEditShowTopTitle">
                <span className="userEditShowUsername">
                  Maria Popescu
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
                <span className="userShowInfoTitle">maria_popescu</span>
              </div>

              <div className="userEditShowInfo">
                <CalendarTodayIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>

              <span className="userEditShowTitle">Contact Details</span>

              <div className="userEditShowInfo">
                <PhoneAndroidIcon className="userEditShowIcon"/>
                <span className="userEditShowInfoTitle">+40770688389</span>
              </div>

              <div className="userEditShowInfo">
                <MailOutlineIcon className="userEditShowIcon"/>
                <span className="userEditShowInfoTitle">mariapopescu@gmail.com</span>
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
                  <input type="text" placeholder="maria_popescu" className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>First Name</label>
                  <input type="text" placeholder="Maria" className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>Last Name</label>
                  <input type="text" placeholder="Popescu" className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder="mariapopescu@gmail.com" className="userEditUpdateInput"></input>
                </div>

                <div className="userEditUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder="+40770688389" className="userEditUpdateInput"></input>
                </div>

              </div>

              <div className="userEditUpdateRight">
                <div className="userEditUpdatePassword">

                <div className="userEditUpdateItem">
                    <label>Date of Birth</label>
                    <input type="date" placeholder="" className="userEditUpdateInput"></input>
                  </div>

                  <div className="userEditUpdateItem">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter Password" className="userEditUpdateInput"></input>
                  </div>

                  <div className="userEditUpdateItem">
                    <label>Repeat Password</label>
                    <input type="password" placeholder="Cofirm Password" className="userEditUpdateInput"></input>
                  </div>

                  <div className="userEditUpdateItem">
                    <label>Choose Profile Picture:</label>
                    <label for="file-upload" class="custom-file-upload">
                    <DriveFolderUploadIcon/>Upload
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileSelected}/>
                    <label>{filePath}</label>
                  </div>
                </div>

                <button className="userEditUpdateButton">Update</button>
              </div>
            </form>
          </div>
          </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
    </>
  )
}
