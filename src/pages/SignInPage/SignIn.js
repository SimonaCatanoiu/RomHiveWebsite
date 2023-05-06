import React, { useState,useContext } from "react";
import "./SignIn.css";
import Popup from "../../components/Popup/Popup.js";
import ForgotPasswordForm from "./ForgotPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate } from "react-router-dom";
import {AuthContext} from './../../context/AuthContext.js'
import {BASE_URL} from './../../utils/config.js'

const SignIn = () => 
{
  const [credentials,setCredentials] = useState(
    {
      email: undefined,
      password: undefined
    }
  )
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e =>
  {
    setCredentials(prev=> ({...prev,[e.target.id]:e.target.value}));
  }

  const handleClick = async e => {
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try {
     const res = await fetch(`${BASE_URL}/auth/login`,
     {
      method:'post',
      headers: {
        'content-type':'application/json'
      },
      credentials:'include',
      body: JSON.stringify(credentials)
     })

     const result = await res.json()
     if(!res.ok) 
      {
        alert(result.message)
        return
      }

     dispatch({type:'LOGIN_SUCCESS',payload:result.data})
     navigate('/')
    }
    catch(err)
    {
      dispatch({type:'LOGIN_FAILURE',payload:err.message})
    }
  }

  const [openPopup,setOpenPopup] = useState(false)
  return <div className="pageBody">
    <br></br>
    <br></br>
    <br></br>

    <section className = "Form my-2 mx-5 py-2">
      <div className="container">
        <div className="row no-gutters" id="my_row">
          <div className="col-lg-4 ">
            <img src="../../images/sign_in.jpg" className="img-fluid" id="img_signIn" alt=""></img>
          </div>
          <div className="col-lg-8 px-5 pt-3">
          <h1 className="font-weight-bold py-3" id="header" >Sign In</h1>
          <h1 id="header2">Welcome back to the smarter way to roam 
          <br/>Login to RoamHive and continue your journey!</h1>
          <div className="container">
            <form  onSubmit={handleClick}>
                <div className="form-row d-flex justify-content-center">
                    <div className="col-lg-6 my-5">
                        <input type="email" id="email" placeholder="Email-Address" className="form-control my-4 p-2" onChange={handleChange}/>
                        <input type="password" id="password" placeholder="Password" className="form-control my-4 p-2" onChange={handleChange}/>
                        <button className="btn btn-dark my-3 mb-2" type="submit">Login</button>
                      <a href="#" onClick= {()=> setOpenPopup(true)} >Forgot password</a>
                      <p>Don't have an account?
                      <Link to="/signUp"><a>Register here</a></Link>
                      </p>
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
    <ForgotPasswordForm setOpenPopup={setOpenPopup}></ForgotPasswordForm>
    </Popup>
  </div>
}

export default SignIn;