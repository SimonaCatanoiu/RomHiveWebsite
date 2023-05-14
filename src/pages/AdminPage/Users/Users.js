import React, {useState,useContext,useEffect} from 'react'
import "../Admin.css"
import "./User.css"
import Sidebar from "../../../components/Sidebar/Sidebar";
import { DataGrid } from '@mui/x-data-grid';
import PersonIcon from '@mui/icons-material/Person';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import {AuthContext} from '../../../context/AuthContext.js'
import {BASE_URL} from "../../../utils/config.js"

export default function Users() {
  const {user} = useContext(AuthContext)
  //fetch data from database
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users`, { credentials: 'include' });
        const server_data = await response.json();
        const users = server_data.data;
        const formattedUsers = users.map((user, index) => {
          return {
            id: user._id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            lastActive: user.lastLogin[0]?.lastLogin ? new Date(user.lastLogin[0].lastLogin).toLocaleDateString('en-GB') : 'Never',
          };
        });
        setData(formattedUsers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);



  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      setData(data.filter(item => item.id !== id));
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', align: 'center',width: 190, headerAlign: 'center'},
    {
      field: 'username',
      headerName: 'Username',
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userNameList">
            <PersonIcon/>{params.row.username}
          </div>
        )
      },
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'firstname',
      headerName: 'Firstname',
      width: 170,
      editable: false,
      align: 'center',
      headerAlign: 'center',
      headerAlign: 'center'
    },
    {
      field: 'lastname',
      headerName: 'Lastname',
      width: 170,
      editable: false,
      align: 'center',
      headerAlign: 'center',
      headerAlign: 'center'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 270,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 120,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'lastActive',
      headerName: 'Last Active',
      width: 110,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'action',
      headerName: 'Action',
      width:170,
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
    <NavbarAdmin></NavbarAdmin>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
      <Sidebar/>
      {user && user.role === 'admin' ? (
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
      ) : (
        <h4>Access denied. You are not authorized to view this page.</h4>
      )}
    </div>
  </div>

  )
}
