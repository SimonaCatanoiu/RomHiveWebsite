import React, { useState,useContext,useEffect } from "react";
import "./SignUp.css";
import Popup from "../../components/Popup/Popup.js";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailIcon from '@mui/icons-material/Email';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";
import {AuthContext} from './../../context/AuthContext.js'
import {BASE_URL} from './../../utils/config.js'
import SuccessPopUp from './SuccessPopUp.js'

const SignUp = () => 
{
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [openPopup,setOpenPopup] = useState(false)
  const [checked,setChecked] = useState(false)
  const [credentials,setCredentials] = useState(
    {
      firstname: undefined,
      lastname: undefined,
      email: undefined,
      phone:undefined,
      password: undefined,
    }
  )

    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

  const handleChange = e =>
  {
    setCredentials(prev=> ({...prev,[e.target.id]:e.target.value}));

    if (e.target.id === "confirmpassword" && e.target.value === credentials.password) {
      setPasswordMatch(true);
    } else if (e.target.id  === "confirmpassword") {
      setPasswordMatch(false);
    }
  }

  useEffect(() => {
    if (openPopup === false && checked === true) {
      navigate('/signin');
    }
  }, [openPopup,checked]);


  const handleClick = async e => {
    e.preventDefault();
    
    if (!passwordMatch) {
      alert("Passwords do not match");
      return;
    }

    if (!(credentials.firstname && credentials.lastname && credentials.email && credentials.phone && credentials.password && credentials.confirmpassword)) {
      alert("Please fill all the fields!");
      return;
    }

    try{
      const res = await fetch(`${BASE_URL}/auth/register`,
      {
        method:'post',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok)
        alert(result.message)
      else
      {
        dispatch({type:'REGISTER_SUCCESS'})
        setOpenPopup(true)
        setChecked(true)
      }

    }
    catch(err)
    {
      alert(err.message);
    }

  }
  
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
                          <input type="email" class="form-control p-2" id="email" placeholder="Email-Address" aria-label="Email-Address" onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><EditNoteIcon></EditNoteIcon></span>
                          <input type="text" class="form-control p-2" id="firstname" placeholder="First Name" aria-label="First Name" onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><EditNoteIcon></EditNoteIcon></span>
                          <input type="text" class="form-control p-2" id="lastname" placeholder="Last Name" aria-label="Last Name" onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><PhoneIcon></PhoneIcon></span>
                          <input type="text" class="form-control p-2" id="phone" placeholder="Mobile Phone" aria-label="Mobile Phone"  onChange={handleChange}/>
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text"><LockIcon></LockIcon></span>
                          <input type="password" class="form-control p-2" id="password" placeholder="Password" aria-label="Password"  onChange={handleChange}/>
                        </div>
          
                        <div class="input-group mb-3">
                          <span class="input-group-text"><LockIcon></LockIcon></span>
                          <input type="password" class="form-control p-2" id="confirmpassword" placeholder="Confirm Password" aria-label="Confirm Password" onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="form-row d-flex justify-content-center">
                  <div className="col-lg-4">
                    <button className="btn btn-dark my-1 mb-3">Register</button>
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
    title="Succesfully created account!">
      <SuccessPopUp setOpenPopup={setOpenPopup}></SuccessPopUp>
    </Popup>
  </div>
}

export default SignUp;