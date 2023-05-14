import React from 'react'
import "../Admin.css"
import "./SettingsPage.css"
import Sidebar from "../../../components/Sidebar/Sidebar";
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function SettingsPage() {
  return (
    <div>
    <NavbarAdmin></NavbarAdmin>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
      <Sidebar/>
      <div className='settingsPage'>
          TO BE DONE
      </div>  
    </div>
  </div>
  )
}
