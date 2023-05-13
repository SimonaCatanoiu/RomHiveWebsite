import React,{useState, useContext} from 'react'
import './Booking.css'
import StarIcon from '@mui/icons-material/Star';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from 'react-router';
import {AuthContext} from '../../../context/AuthContext.js'
import {BASE_URL} from "../../../utils/config.js"

const Booking = ({offer,avgRating}) =>
{
    const {price,reviews,title} = offer;
    const navigate = useNavigate();

    const {user} = useContext(AuthContext)

    const [booking,setBooking] = useState({
        userId: user && user._id,
        userEmail:user && user.email,
        offerName: title,
        fullName:"",
        phone:"",
        guestSize:"",
        bookAt:"",
        price:"",
        offerId: useParams().id
    })

    const handleChange = e => {
        setBooking(prev => ({
          ...prev,
          [e.target.id]: e.target.value,
          price:
            e.target.id === "guestSize"
              ? (Number(price) * Number(e.target.value) + Number(serviceFee)).toFixed(2)
              : prev.price
        }));
      };

    const serviceFee = 10;
    const totalAmount = Number(price)*Number(booking.guestSize) + Number(serviceFee);



    const handleClick = async e=>{
        console.log(booking)
        e.preventDefault();
        try{
            if(!user || user===undefined || user===null)
            {
              return alert('Please sign in');  
            }

            const res = await fetch(`${BASE_URL}/booking`,
            {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)
            })

            const result = await res.json()

            if(!res.ok)
            {
                return alert(result.message)
            }
            navigate("/OrderCompleted");
        }
        catch(err)
        {
            alert(err.message )
        }

        
    }

    return <div className="booking">
        <div className='booking__top d-flex align-items-center justify-content-between'>
            <h3>
                ${price}<span>/per person</span>
            </h3>
            <span className='tour__rating d-flex align-items-center'>
                <StarIcon style={{ fill: '#d2386c' }}/>{avgRating ===0 ? null: avgRating} ({reviews?.length})
            </span>
        </div>

        <div className='booking__form'>
            <h5>Information</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Full Name' id="fullName" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone' id="phone" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id="bookAt" required onChange={handleChange}/>
                    <input type="number" placeholder='Guests' id="guestSize" required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>
        <div className="booking__bottom"> 
            <MDBListGroup>
                <MDBListGroupItem classname="border-0 px-0">
                    <h5 className='d-flex align-items-center gap-1'>${price}<CloseIcon/> 1 person</h5>
                    <span>{price}</span>
                    
                </MDBListGroupItem>
                <MDBListGroupItem classname="border-0 px-0">
                    <h5>Service charge</h5>
                    <span>${serviceFee}</span>
                </MDBListGroupItem>
                <MDBListGroupItem classname="border-0 px-0">
                    <h5 id="total_h5">Total</h5>
                    <span id="total_span">${totalAmount}</span>
                </MDBListGroupItem>
            </MDBListGroup>

            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book now</Button>
        </div>
    </div>
};

export default Booking;