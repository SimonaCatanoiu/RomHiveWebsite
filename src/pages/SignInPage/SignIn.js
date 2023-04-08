import React, { useState } from "react";
import "./SignIn.css";
import Popup from "../../components/Popup/Popup.js";
import ForgotPasswordForm from "./ForgotPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SignIn = () => 
{
  const [openPopup,setOpenPopup] = useState(false)
  return <div className="pageBody">
    <br></br>
    <br></br>
    <br></br>

    <section className = "Form my-2 mx-5 py-2">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 ">
            <img src="../../images/sign_in.jpg" className="img-fluid" id="img_signIn" alt=""></img>
          </div>
          <div className="col-lg-8 px-5 pt-3">
          <h1 className="font-weight-bold py-3" id="header" >Sign In</h1>
          <h1 id="header2">Join the hive and unlock smarter ways to roam with RoamHive!</h1>
          <div className="container">
            <form>
                <div className="form-row d-flex justify-content-center">
                    <div className="col-lg-6 my-5">
                      <input type="email" placeholder="Email-Address" className="form-control my-4 p-2"/>
                      <input type="password" placeholder="Password" className="form-control my-4 p-2"/>
                      <button className="btn btn-dark my-3 mb-2">Login</button>
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