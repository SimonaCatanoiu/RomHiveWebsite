import React, {useRef,useState,useEffect} from "react";
import "./OfferDetails.css"
import { useParams } from "react-router";
import { Col, Container, Form, Row } from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import Footer from "../../../components/Footer/Footer.js"
import { MDBListGroup } from "mdb-react-ui-kit";
import avatar from "../../../components/assets/avatar.jpg"
import Booking from "./Booking";
import {BASE_URL} from './../../../utils/config.js'

const OfferDetails = () => {
    const { id } = useParams()
    const reviewMsgRef = useRef('')
    const [tourRating,setTourRating]=useState(null);
    
    const [offer,setData]=useState(null)
    const [errorFetch,setError]=useState(null)
    useEffect(() => {
        fetch(`${BASE_URL}/offers/${id}`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => {
            console.error(error);
            setError(error);
          });
      }, [id]);
    if(errorFetch)
    { 
        return <div><br/><br/><br/><br/><p>Server Error</p></div>
    }
    if (!offer) {
        return <div><br/><br/><br/><br/><p>Loading...</p></div>
    }
    console.log(offer.data)
    const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = offer.data

    const totalRating = reviews?.reduce((acc, item) =>
        acc + item.rating, 0)
    const avgRating = totalRating === 0
        ? ''
        : totalRating === 1
            ? totalRating
            : (totalRating / reviews?.length).toFixed(1);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    const submitHandler = e=>
    {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value
        alert(`${reviewText}, ${tourRating}`)
    }
    
    return <>
        <br />
        <br />
        <br />
        <br />
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className="offer__content">
                            <img src={photo} alt="" />
                            <div className=" offer__info">
                                <h2>{title}</h2>
                                <div className="d-flex align-items-center gap-5">
                                    <span className='offer__rating d-flex align-items-center gap-1'>
                                        <StarIcon className='icon_card_details' />{avgRating === 0 ? null : avgRating} {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
                                    </span>
                                    <span>
                                        <LocationOnIcon className='icon_card_details2' />{address}
                                    </span>
                                </div>
                                    <div className="offer__extra-details">
                                    <Container>
                                    <Row>
                                    <Col lg="3">
                                        <span>
                                            <LocationCityIcon className='icon_card_details2' />{city}
                                        </span>
                                    </Col>
                                    <Col lg="3">
                                        <span>
                                            <MonetizationOnIcon className='icon_card_details2' />${price} / per person
                                        </span>
                                    </Col>
                                    <Col lg="3">
                                        <span>
                                            <TimeToLeaveIcon className='icon_card_details2' />{distance} km
                                        </span>
                                    </Col>
                                    <Col lg="3">
                                        <span>
                                            <GroupIcon className='icon_card_details2' />{maxGroupSize} people
                                        </span>
                                    </Col>
                                    </Row>
                                    </Container>
                                    </div>
                                <h5>Description</h5>
                                <p>{desc}</p>
                            </div>
                            <div className="offer_reviews mt-4">
                                <h4>
                                    Reviews ({reviews?.length} reviews)
                                </h4>
                                <Form onSubmit={submitHandler}>
                                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                        <span onClick={()=>setTourRating(1)}>1<StarIcon /></span>
                                        <span onClick={()=>setTourRating(2)}>2<StarIcon /></span>
                                        <span onClick={()=>setTourRating(3)}>3<StarIcon /></span>
                                        <span onClick={()=>setTourRating(4)}>4<StarIcon /></span>
                                        <span onClick={()=>setTourRating(5)}>5<StarIcon /></span>
                                    </div>

                                    <div className="review__input">
                                        <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required/>
                                        <button className="btn primary__btn text-white" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                                <MDBListGroup className="user__reviews">
                                    {
                                        reviews?.map(review =>
                                        (
                                            <div className="review__item">
                                                <img src={avatar} alt="" />

                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>
                                                                {review.username}
                                                            </h5>
                                                            <p>
                                                                {
                                                                    new Date('04-10-2023').toLocaleDateString("en-US",options)
                                                                }
                                                            </p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                        {review.rating}<StarIcon sx={{ fontSize: "1.2rem" }}/>
                                                        </span>
                                                    </div>

                                                    <h6>
                                                        {review.reviewText}
                                                    </h6>
                                                </div>
                                            </div>
                                        )
                                        )
                                    }
                                </MDBListGroup>
                            </div>
                        </div>
                    </Col>

                    <Col lg='4'>
                       <Booking offer={offer.data} avgRating={avgRating}></Booking>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Footer></Footer>
        </section>
    </>
}

export default OfferDetails;
