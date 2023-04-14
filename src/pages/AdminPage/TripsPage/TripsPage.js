import React, {useState} from 'react'
import "../Admin.css"
import "./TripsPage.css"
import Sidebar from "../../../components/Sidebar/Sidebar.js";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Tripsrows} from './TripsData'
import { Link } from 'react-router-dom';


export default function TripsPage() {

  const [Tripdata,setTripsrows] = useState(Tripsrows)

  const handleDelete = (id) => {
    const index = Tripdata.findIndex((row) => row.id === id);
    console.log(index);
    if (index !== -1) {
    const newRows = [...Tripdata];
    newRows.splice(index, 1);
    console.log(newRows);
    setTripsrows(newRows);
    }
  }

  const Tripscolumns = [
    { field: 'id', headerName: 'ID', align: 'center',width: 90, headerAlign: 'center'},
    {
      field: 'name',
      headerName: 'Name',
      width: 450,
      renderCell: (params) => {
        return (
          <div className="TripList">
            <img className="TripListImg" src={params.row.picture} alt=""/>{params.row.name}
          </div>
        )
      },
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
      editable: false,
      renderCell: (params) => {
        return (
          <span>{params.row.price}$</span>
        )
      },
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'city',
      headerName: 'City',
      width: 130,
      editable: false,
      align: 'center',
      headerAlign: 'center',
      headerAlign: 'center'
    },
    {
      field: 'country',
      headerName: 'Country',
      sortable: true,
      width: 160,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'feature',
      headerName: 'Featured',
      sortable: true,
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
          <Link style={{ textDecoration: 'none' }} to={"/adminpage/Trips/"+params.row.id}>
            <button className="tripListEdit">Edit</button>
          </Link>
            <DeleteOutlineIcon className="tripListDelete" onClick={()=>handleDelete(params.row.id)}/>
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
      <div className='tripPage'>
        <DataGrid
          rows={Tripdata}
          columns={Tripscolumns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
                rowCount: Tripdata.length,
                currentPage: 0,
              },
            },
          }}
          pageSizeOptions={[4]}
          disableRowSelectionOnClick
          rowHeight={130}
        />
      </div>
    </div>
  </div>
  )
}
