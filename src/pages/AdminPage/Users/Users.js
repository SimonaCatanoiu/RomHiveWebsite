import React, {useState} from 'react'
import "../Admin.css"
import "./User.css"
import Sidebar from "../../../components/Sidebar/Sidebar";
import { DataGrid } from '@mui/x-data-grid';
import PersonIcon from '@mui/icons-material/Person';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {rows} from './UserData'
import { Link } from 'react-router-dom';

export default function Users() {
  
  const [data,setData] = useState(rows)

  const handleDelete = (id) => {
    setData(data.filter(item=>item.id!==id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', align: 'center',width: 90, headerAlign: 'center'},
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userNameList">
            <PersonIcon/>{params.row.name}
          </div>
        )
      },
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'staus',
      headerName: 'Status',
      width: 130,
      editable: false,
      align: 'center',
      headerAlign: 'center',
      headerAlign: 'center'
    },
    {
      field: 'transaction',
      headerName: 'Last Transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'action',
      headerName: 'Action',
      width:150,
      renderCell: (params) => {
        return (
          <>
          <Link style={{ textDecoration: 'none' }} to={"/adminpage/users/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      },
      align: 'center',
      headerAlign: 'center'
    }
  ];


  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
      <Sidebar/>
      <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        disableRowSelectionOnClick
      />
      </div>
    </div>
  </div>

  )
}
