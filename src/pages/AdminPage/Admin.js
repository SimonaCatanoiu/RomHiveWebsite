import React from "react";
import "./Admin.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import MainPage from "./MainPage/MainPage";
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin.js"

const Admin = () => 
{
  return <>
    <NavbarAdmin></NavbarAdmin>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
        <Sidebar/>
        <MainPage/>
    </div>
    </>
}

export default Admin;