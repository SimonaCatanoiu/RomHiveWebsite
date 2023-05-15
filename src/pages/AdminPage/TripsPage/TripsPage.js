import React, {useState,useEffect,useContext} from 'react'
import "../Admin.css"
import "./TripsPage.css"
import Sidebar from "../../../components/Sidebar/Sidebar.js";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import {BASE_URL} from '../../../utils/config.js'
import {AuthContext} from '../../../context/AuthContext.js'


export default function TripsPage() {

  const [Tripdata,setTripsrows] = useState([])
  const {user} = useContext(AuthContext)
  //fetch data from database
  useEffect(() => {
    const fetchTripsrows = async () => {
      if(user && user.role === 'admin')
      {
      try {
          const response = await fetch(`${BASE_URL}/offers/adminOffers`);
          const data = await response.json();
          console.log(data)
          //fetch the images
          const tripsWithImages = await Promise.all(
            data.Tripsrows.map(async (trip) => {
               const imagename = trip.picture.split('/').pop();
              const imageResponse = await fetch(`${BASE_URL}/images/imgAdm/${imagename}`);
              const imageBlob = await imageResponse.blob();
              const objectURL = URL.createObjectURL(imageBlob);
              return { ...trip, objectURL };
            })
          );
          setTripsrows(tripsWithImages);
        }
        catch (error) {
          console.error('Error fetching Tripsrows:', error);
        }
      } 
    };
    fetchTripsrows();
  }, []);


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        const response = await fetch(`${BASE_URL}/offers/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        if (response.ok) {
          const updatedRows = Tripdata.filter((row) => row.id !== id);
          setTripsrows(updatedRows);
        } else {
          const data = await response.json();
          console.error(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const Tripscolumns = [
    { field: 'id', headerName: 'ID', align: 'center',width: 200, headerAlign: 'center'},
    {
      field: 'name',
      headerName: 'Name',
      width: 450,
      renderCell: (params) => {
        return (
          <div className="TripList">
            <img className="TripListImg" src={params.row.objectURL} alt=""/>{params.row.name}
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
    <NavbarAdmin></NavbarAdmin>
    <br></br>
    <br></br>
    <br></br>

    <div className="container_admin">
      <Sidebar/>
      <div className='tripPage'>
      {user && user.role === 'admin' ? (
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
        />):
        (<h4 style={{ textAlign: 'left' }}>Access denied. You are not authorized to view this page.</h4>)
        }
      </div>
    </div>
  </div>
  )
}
