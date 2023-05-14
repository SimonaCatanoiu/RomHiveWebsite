import React from 'react'
import "../Admin.css"
import "./TransactionPage.css"
import Sidebar from "../../../components/Sidebar/Sidebar";
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function TransactionPage() {
  return (
    <div>
    <NavbarAdmin></NavbarAdmin>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
      <Sidebar/>
      <div className='transactionPage'>
        TO BE DONE
      </div>
    </div>
  </div>
  )
}
