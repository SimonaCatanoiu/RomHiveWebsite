import React, { useState } from "react";
import "./SignUp.css";
import Popup from "../../components/Popup/Popup.js";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailIcon from '@mui/icons-material/Email';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";

const SignUp = () => 
{
  const [credentials,setCredentials] = useState(
    {
      email: undefined,
      firstname: undefined,
      lastname: undefined,
      mobilephone:undefined,
      password: undefined,
      confirm_password:undefined,
    }
  )

  const handleChange = e =>
  {
    setCredentials(prev=> ({...prev,[e.target.id]:e.target.value}));
  }

  const handleClick = e => {
    e.preventDefault();
  }

  const [openPopup,setOpenPopup] = useState(false)
  return <div className="pageBody">
    <br></br>
    <br></br>
    <br></br>

    <section className = "Form my-2 mx-5 py-2">
      <div className="container">
        <div className="row no-gutters" id="my_row">
          <div className="col-lg-4">
            <img src="../../images/register.jpg" className="img-fluid" id="img_signIn" alt=""></img>
          </div>
          <div className="col-lg-8 px-5 pt-1">
          <h1 className="font-weight-bold py-4" id="header" >Sign Up</h1>
          <h1 id="header2">Join the hive and unlock smarter ways to roam with RoamHive!</h1>
          <div className="container">
            <form onSubmit={handleClick}>
                <div className="form-row d-flex justify-content-center">
                    <div className="col-lg-6 my-3">
                        <div class="input-group mb-3">
                          <span class="input-group-text"><EmailIcon></EmailIcon></span>
                          <input type="text" class="form-control p-2" placeholder="Email-Address" aria-label="Email-Address" onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><EditNoteIcon></EditNoteIcon></span>
                          <input type="text" class="form-control p-2" placeholder="First Name" aria-label="First Name" onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><EditNoteIcon></EditNoteIcon></span>
                          <input type="text" class="form-control p-2" placeholder="Last Name" aria-label="Last Name" onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><PhoneIcon></PhoneIcon></span>
                          <input type="text" class="form-control p-2" placeholder="Mobile Phone" aria-label="Mobile Phone"  onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><LockIcon></LockIcon></span>
                          <input type="password" class="form-control p-2" placeholder="Password" aria-label="Password"  onChange={handleChange}/>
                        </div>
          
                        <div class="input-group mb-3">
                          <span class="input-group-text"><LockIcon></LockIcon></span>
                          <input type="password" class="form-control p-2" placeholder="Confirm Password" aria-label="Confirm Password" onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="form-row d-flex justify-content-center">
                  <div className="col-lg-4">
                  <Link to="/signin">
                          <button className="btn btn-dark my-1 mb-3">Register</button>
                  </Link>
                  </div>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Popup openPopup={openPopup}
    setOpenPopup={setOpenPopup}
    title="Reset Password">
    </Popup>
  </div>
}

export default SignUp;