import React, { useState } from "react";
import "./SignUp.css";
import Popup from "../../components/Popup/Popup.js";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => 
{
  const [openPopup,setOpenPopup] = useState(false)
  return <div className="pageBody">
    <br></br>
    <br></br>
    <br></br>

    <section className = "Form my-2 mx-5 py-2">
      <div className="container">
        <div className="row no-gutters" id="SignUpRow">
          <div className="col-lg-4">
            <img src="../../images/register.jpg" className="img-fluid" id="img_signIn" alt=""></img>
          </div>
          <div className="col-lg-8 px-5 pt-1">
          <h1 className="font-weight-bold py-4" id="header" >Sign Up</h1>
          <h1 id="header2">Join the hive and unlock smarter ways to roam with RoamHive!</h1>
          <div className="container">
            <form>
                <div className="form-row d-flex justify-content-center">
                    <div className="col-lg-4 my-3">
                      <input type="email" placeholder="Email-Address" className="form-control my-2 p-2"/>
                      <input type="text" placeholder="First Name" className="form-control my-3 p-2"/>
                      <input type="text" placeholder="Last Name" className="form-control my-3 p-2"/>
                      <input type="text" placeholder="Mobile Phone" className="form-control my-3 p-2"/>
                      <input type="password" placeholder="Password" className="form-control my-3 p-2"/>
                      <input type="password" placeholder="Confirm Password" className="form-control my-3 p-2"/>
                    </div>
                    <div className="col-lg-3 mx-3">
                      <div class="input-group mb-3">
                        <span class="input-group-text"></span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search"/>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-md-4">
                      <button className="btn btn-dark my-1 mb-3">Register</button>
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