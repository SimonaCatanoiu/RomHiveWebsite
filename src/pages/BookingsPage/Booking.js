import React, {useState,useContext,useEffect} from 'react'
import "./Booking.css"
import {AuthContext} from '../../context/AuthContext.js'
import {BASE_URL} from "../../utils/config.js"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';


export default function Booking() {

  const {user} = useContext(AuthContext)
  //fetch data from database
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    if (user?._id) {
      const fetchBookings = async () => {
        try {
          const response = await fetch(`${BASE_URL}/booking/all/${user._id}`, { credentials: 'include' });
          const server_data = await response.json();
          setBookings(server_data.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchBookings();
    }
  }, [user?._id]);
  
  
  const data = bookings.map((booking) => {
    const bookingDate = new Date(booking.bookAt);
    const currentDate = new Date();
    const status = bookingDate.getTime() >= currentDate.getTime() ? "Incoming" : "Passed";
    return {
      id: booking._id,
      offerName: booking.offerName,
      offerId: booking.offerId,
      fullName: booking.fullName,
      phone: booking.phone,
      guestSize: booking.guestSize,
      status: status,
      price: booking.price,
      bookAt: new Date(booking.bookAt).toLocaleDateString('en-GB'),
    };
  });

  const columns = [
    { field: 'id', headerName: 'ID', align: 'center',width: 250,editable: false, headerAlign: 'center'},
    {
      field: 'offerName',
      headerName: 'Offer Name',
      width: 300,
      editable: false,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/offers/${params.row.offerId}`} style={{ color: 'black' }}>
            {params.row.offerName}
            </Link>
          </div>
        )
      },
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'fullName',
      headerName: 'Name',
      width: 250,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 100,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'guestSize',
      headerName: 'Guest Number',
      width: 160,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'bookAt',
      headerName: 'Book Date',
      width: 170,
      editable: false,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            {params.row.price}$
          </div>
        )
      },
      width: 160,
      align: 'center',
      headerAlign: 'center'
    }
  ]

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div className='container_booking'>
    <div className='table_booking'>
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
    </>
  )
}
