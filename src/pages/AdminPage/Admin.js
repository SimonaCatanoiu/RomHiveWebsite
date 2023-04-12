import React from "react";
import "./Admin.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import MainPage from "./MainPage/MainPage";
import { Col, Container, Row } from "react-bootstrap";

const Admin = () => 
{
  return <div>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
        <Sidebar/>
        <MainPage/>
    </div>
  </div>
}

export default Admin;