import React,{useState,useEffect,useContext} from 'react'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Col,Row, Container } from 'react-bootstrap';
import { Link,useParams } from 'react-router-dom';
import "../Admin.css"
import "./TripsEdit.css"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import {AuthContext} from '../../../context/AuthContext.js'
import {BASE_URL} from '../../../utils/config.js'

export default function TripsEdit() {
  const { id } = useParams();
  const {user} = useContext(AuthContext)
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchSelectedTrip = async () => {
        if(user && user.role === 'admin')
      {
        try {
          const response = await fetch(`${BASE_URL}/offers/${id}`);
          const data = await response.json();
          setSelectedTrip(data.data);
        } catch (error) {
          console.error('Error fetching selected trip:', error);
        }
      };
    }

      fetchSelectedTrip();
    }
  }, [id]);

  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [distance, setDistance] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [featured, setFeatured] = useState('');
  const [maxgroup, setMaxGroup] = useState('');
  const [noPackets, setNoPackets] = useState('');
  const [filePath, setFilePath] = useState('');
  const [file, setFile] = useState(null);
  const [displayFile, setFileName] = useState(null);

  useEffect(() => {
    if (selectedTrip?.title) {
      setTitle(selectedTrip?.title);
    }
    if (selectedTrip?.city) {
      setCity(selectedTrip?.city);
    }
    if (selectedTrip?.distance) {
      setDistance(selectedTrip?.distance);
    }
    if (selectedTrip?.address) {
      setAddress(selectedTrip?.address);
    }
    if (selectedTrip?.desc) {
      setDescription(selectedTrip?.desc);
    }
    if (selectedTrip?.price) {
      setPrice(selectedTrip?.price);
    }
    setFeatured(selectedTrip?.featured === true ? "true" : (selectedTrip?.featured === false ? "false" : ""));
    if (selectedTrip?.maxGroupSize) {
      setMaxGroup(selectedTrip?.maxGroupSize);
    }
    if (selectedTrip?.noPackets) {
      setNoPackets(selectedTrip?.noPackets);
    }
    if (selectedTrip?.photo) {
      setFilePath(selectedTrip?.photo);
      setFileName(selectedTrip?.photo);
    }
  }, [selectedTrip]);



  const handleFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePath(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
    } else {
      setFile(null);
      setFilePath("");
      setFileName(selectedTrip?.photo);
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('city', city);
    formData.append('distance', distance);
    formData.append('address', address);
    formData.append('desc', description);
    formData.append('price', price);
    formData.append('featured', featured);
    formData.append('maxGroupSize', maxgroup);
    formData.append('noPackets', noPackets);
    formData.append('displayFile', displayFile);

    if (file) {
      formData.append('offerPicture', file);
    }

    try {
      const response = await fetch(`${BASE_URL}/offers/updateOffer/${id}`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      await response.json();
      window.history.replaceState(null, null, window.location.href);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  
  async function handleDelete(reviewId) {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        const response = await fetch(`${BASE_URL}/offers/adminDeleteReview`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            offerId: selectedTrip._id,
            reviewId: reviewId
          }),
          credentials: 'include'
        });
        if (response.ok) {
          window.location.reload();
        } else {
          throw new Error('Failed to delete review');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
    <NavbarAdmin></NavbarAdmin>
    <br></br>
    <br></br>
    <br></br>
    <div className="container_admin">
      <Sidebar/>
      <div className='TripsPage'>
      {user && user.role === 'admin' ? (
        <>
        <div className="TripsTitleContainer">
          <Container>
            <Row>
              <Col lg='10'>
                <h1 className='TripsTitle'>Edit Product</h1>
              </Col>
              <Col lg='2' className='d-flex justify-content-end'>
                <Link style={{textDecoration: 'none'}} to="/adminPage/TripsAdd">
                  <button className="ProductAddButton">Add</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='ProductContainer'>
        <Container>
          <Row>
          <Col lg="12">
          <div className="ProductUpdate">
            <span className="ProductUpdateTitle">Edit</span>
            <form className="ProductUpdateForm">
              <div className="ProductUpdateLeft">
                
                <div className="ProductUpdateItem">
                  <label>Trip Title</label>
                  <input type="text" value={title} onChange={event => setTitle(event.target.value)} className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                  <label>Trip City</label>
                  <input type="text" value={city} onChange={event => setCity(event.target.value)} className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                  <label>Distance</label>
                  <input type="text" value={distance} onChange={event => setDistance(event.target.value)} className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                    <label>Address</label>
                    <input type="text" value={address} onChange={event => setAddress(event.target.value)} className="ProductUpdateInput"></input>
                  </div>


                <div className="ProductUpdateItem">
                  <label>Description</label>
                  <textarea name="textarea" value={description} onChange={event => setDescription(event.target.value)} className="ProductUpdateTextArea"></textarea>
                </div>
                

              </div>

              <div className="ProductUpdateRight">
                <div>
                  <div className="ProductUpdateItem">
                    <label>Price</label>
                    <input type="text" value={price} onChange={event => setPrice(event.target.value)} className="ProductUpdateInput"></input>
                  </div>

                  <div className="ProductUpdateItem">
                    <label>Featured</label>
                    <input type="text" value={featured} onChange={event => setFeatured(event.target.value)} className="ProductUpdateInput"></input>
                  </div>
                  <div className="ProductUpdateItem">
                    <label>Max Group Size</label>
                    <input type="text" value={maxgroup} onChange={event => setMaxGroup(event.target.value)} className="ProductUpdateInput"></input>
                  </div>
                  <div className="ProductUpdateItem">
                    <label>No Packets</label>
                    <input type="text" value={noPackets} onChange={event => setNoPackets(event.target.value)} className="ProductUpdateInput"></input>
                  </div>

                  <div className="ProductUpdateItem">
                    <div className="userEditUpdateItem">
                      <label>Choose Trip Picture:</label>
                      <label for="file-upload" class="custom-file-upload">
                      <DriveFolderUploadIcon/>Upload
                      </label>
                      <input id="file-upload" type="file" onChange={handleFileSelected}/>
                      <label>{displayFile}</label>
                    </div>         
                </div>
                </div>
                <button className="ProductUpdateButton" onClick={handleSubmit}>Update</button>
              </div>
            </form>
            
            
                <div className="ReviewSection">
                <br/>
                  <label className="ReviewSectionLabel">Reviews</label>
                <br/><br/>
                  {selectedTrip && selectedTrip.reviews.map((review) => (
                    <div key={review._id} className="ReviewContainer">
                        <p className="ReviewId">Review Id: {review._id}</p>
                        <p className="ReviewUsername">Username: {review.username}</p>
                        <p className="ReviewText">Review Text: {review.reviewText}</p>
                        <br/>
                        <button className="DeleteReviewButton" onClick={() => handleDelete(review._id)}>Delete</button>
                    </div>
                  ))}
                </div>



          </div>
          </Col>
          </Row>
        </Container>
        </div>
        </>
      ) :
      (<h4>Access denied. You are not authorized to view this page.</h4>)}
      </div>
    </div>
  </div>
  )
}
