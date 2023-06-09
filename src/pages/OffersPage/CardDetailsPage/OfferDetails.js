import React, {useRef,useState,useEffect,useContext} from "react";
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
import Booking from "./Booking";
import {BASE_URL} from './../../../utils/config.js'
import {AuthContext} from './../../../context/AuthContext.js'
import SuccessPopUp from './../../../components/Popup/SuccessPopUp.js'
import Popup from "./../../../components/Popup/Popup.js";

async function getUserPicture(offer) {
    const usersProfilePictures = await Promise.all(
    offer.data.reviews.map(async (review) => {
        if (review.userId) {
          const getUserPicturePath = await fetch(`${BASE_URL}/users/getuserPicture/${review.userId}`);
          const response = await getUserPicturePath.json();
          if (response.success) {
            const imagename = response.data.photo.split('/').pop();
            const response2 = await fetch(`${BASE_URL}/images/img/${imagename}`);
            const data = await response2.blob();
            const imageUrl = URL.createObjectURL(data);
            const profilePicturePath = imageUrl;
            return { profilePicturePath, reviewId: review._id };
          }
        }
        const profilePicturePath = "/images/avatar.jpg";
        return { profilePicturePath, reviewId: review._id };
      })
    );
    
    return usersProfilePictures;
  }

const OfferDetails = () => {
    const { id } = useParams()
    const reviewMsgRef = useRef('')
    const [reviewMsg, setReviewMsg] = useState('');
    const [tourRating,setTourRating]=useState(null);
    const {user} = useContext(AuthContext)
    const [openPopup,setOpenPopup] = useState(false)
    const [users, setUsers] = useState({});
    const [selectedRating, setSelectedRating] = useState(0);
    const [offer,setData]=useState(null)
    const [errorFetch,setError]=useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/offers/${id}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError(error);
        });
    }, [id]);

    useEffect(() => {
        if (!offer || !offer.data.reviews) {
          return;
        }
        getUserPicture(offer).then((data) => setUsers(data));
      }, [offer]);

      const [filePath,setFilePath] = useState("");
      useEffect(() => {
        if (offer && offer.data.photo) {
            setFilePath(offer.data.photo);
        }
        }, [offer]);

      const [filePathShow, setFileLink] = useState("");
        useEffect(() => {
            async function fetchImage() {
                try {
                const imagename = filePath.split('/').pop();
                if (imagename !== '') {
                    const response = await fetch(`${BASE_URL}/images/imgAdm/${imagename}`);
                    const data = await response.blob();
                    const imageUrl = URL.createObjectURL(data);
                    setFileLink(imageUrl);
                  }
                } catch (error) {
                console.error(error);
                }
            }
            fetchImage();
        }, [filePath]);


    if(errorFetch)
    { 
        return <div><br/><br/><br/><br/><p>Server Error</p></div>
    }
    if (!offer) {
        return <div><br/><br/><br/><br/><p>Loading...</p></div>
    }

    const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = offer.data
      
    const totalRating = reviews?.reduce((acc, item) =>
        acc + item.rating, 0)
    const avgRating = totalRating === 0
        ? ''
        : totalRating === 1
            ? totalRating
            : (totalRating / reviews?.length).toFixed(1);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    const handleRatingClick = (rting) => {
        setSelectedRating((prevRating) => (prevRating === rting ? 0 : rting));
    };

    const submitHandler = async e=>
    {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value;
        
        try{

            if(!user || user===undefined || user===null)
            {
                alert('You are not signed in!')
                return
            }

            const toSend = {
                username:user?.username,
                reviewText:reviewText,
                rating:tourRating,
                userId:user?._id
            }

            const res = await fetch(`${BASE_URL}/review/${id}`,{
                method:'post',
                headers:{
                    'content-type': 'application/json'
                },
                credentials:'include',
                body:JSON.stringify(toSend)
            })

           const result = await res.json()
           if(!res.ok)
           {
                return alert(result.message);
           }
           setOpenPopup(true);
           handleRatingClick(0);
           setTourRating(0);
           setReviewMsg('');
        }
        catch(err)
        {
            alert(err.message);
        }

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
                            <img src={filePathShow} alt="" />
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
                                        <span className={selectedRating >= 1 ? "selected" : ""} onClick={()=>{setTourRating(1);  handleRatingClick(1);}}>1<StarIcon /></span>
                                        <span className={selectedRating >= 2 ? "selected" : ""} onClick={()=>{setTourRating(2);  handleRatingClick(2);}}>2<StarIcon /></span>
                                        <span className={selectedRating >= 3 ? "selected" : ""} onClick={()=>{setTourRating(3);  handleRatingClick(3);}}>3<StarIcon /></span>
                                        <span className={selectedRating >= 4 ? "selected" : ""} onClick={()=>{setTourRating(4);  handleRatingClick(4);}}>4<StarIcon /></span>
                                        <span className={selectedRating >= 5 ? "selected" : ""} onClick={()=>{setTourRating(5);  handleRatingClick(5);}}>5<StarIcon /></span>
                                    </div>

                                    <div className="review__input">
                                        <input type="text" ref={reviewMsgRef} onChange={(e) => setReviewMsg(e.target.value)} value={reviewMsg} placeholder="share your thoughts" required/>
                                        <button className="btn primary__btn text-white" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                                <MDBListGroup className="user__reviews">
                                    {
                                        reviews?.map(review => {   
                                            const data = Object.values(users).find(user => user.reviewId === review._id);                                   
                                            const profilePicturePath = data ? data.profilePicturePath : "/images/avatar.jpg";
                                            return (
                                                <div className="review__item">
                                                <img src={profilePicturePath} alt="NotFound" onError={() => console.log("Error loading image")} />
                                                    <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                        <h5>{review.username}</h5>
                                                        <p>{new Date(review.createdAt).toLocaleDateString("en-US",options)}</p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                        {review.rating}<StarIcon sx={{ fontSize: "1.2rem" }}/>
                                                        </span>
                                                    </div>
                                                    <h6>{review.reviewText}</h6>
                                                    </div>
                                                </div>
                                                );
                                        }
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
        <Popup openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Submitted review!">
        <SuccessPopUp setOpenPopup={setOpenPopup}></SuccessPopUp>
        </Popup>
        <section>
            <Footer></Footer>
        </section>
    </>
}

export default OfferDetails;
