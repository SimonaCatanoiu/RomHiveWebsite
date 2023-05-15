import React,{useState ,useContext} from 'react'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Col,Row, Container } from 'react-bootstrap';
import "../Admin.css"
import "./TripsEdit.css"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import {BASE_URL} from '../../../utils/config.js'
import {AuthContext} from '../../../context/AuthContext.js'

export default function TripsEdit() {

  const {user} = useContext(AuthContext)

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !city || !distance || !address || !description || !price || !featured || !maxgroup || !noPackets || !file) {
      alert('Please fill in all the required fields.');
      return;
    }

    if (isNaN(parseFloat(price)) || isNaN(parseFloat(distance)) || isNaN(parseInt(maxgroup)) || isNaN(parseInt(noPackets))) {
      alert('Price, distance, max group size, and number of packets must be valid numbers.');
      return;
    }

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
    formData.append('offerPicture', file);

    try {
      if(user && user.role === 'admin')
      {
      const response = await fetch(`${BASE_URL}/offers`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      const data = await response.json();
      if(data.success)
      {
        alert('Offer added succesfully!');
        window.history.replaceState(null, null, window.location.href);
        window.location.reload();
      }
    }
    } catch (error) {
      console.error(error);
    }

  }

  const handleFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePath(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
    } else {
      setFile(null);
      setFilePath("");
      setFileName(selectedFile.photo);
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
              <Col lg='12'>
                <h1 className='TripsTitle'>Add Product</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='ProductContainer'>
        <Container>
          <Row>
          <Col lg="12">
          <div className="ProductUpdate">
            <span className="ProductUpdateTitle">Add</span>
            <form className="ProductUpdateForm">
              <div className="ProductUpdateLeft">
                
                <div className="ProductUpdateItem">
                  <label>Trip Title</label>
                  <input type="text" placeholder="Trip Title" value={title} onChange={event => setTitle(event.target.value)} className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                  <label>Trip City</label>
                  <input type="text" placeholder="Trip City" value={city} onChange={event => setCity(event.target.value)} className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                  <label>Distance</label>
                  <input type="text" placeholder="Distance" value={distance} onChange={event => setDistance(event.target.value)} className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                    <label>Address</label>
                    <input type="text" placeholder="Address" value={address} onChange={event => setAddress(event.target.value)} className="ProductUpdateInput"></input>
                  </div>


                <div className="ProductUpdateItem">
                  <label>Description</label>
                  <textarea name="textarea" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)} className="ProductUpdateTextArea"></textarea>
                </div>
                

              </div>

              <div className="ProductUpdateRight">
                <div>
                  <div className="ProductUpdateItem">
                    <label>Price</label>
                    <input type="text" placeholder="Price" value={price} onChange={event => setPrice(event.target.value)} className="ProductUpdateInput"></input>
                  </div>

                  <div className="ProductUpdateItem">
                    <label>Featured</label>
                    <input type="text" placeholder="Featured" value={featured} onChange={event => setFeatured(event.target.value)} className="ProductUpdateInput"></input>
                  </div>
                  <div className="ProductUpdateItem">
                    <label>Max Group Size</label>
                    <input type="text" placeholder="Size" value={maxgroup} onChange={event => setMaxGroup(event.target.value)} className="ProductUpdateInput"></input>
                  </div>
                  <div className="ProductUpdateItem">
                    <label>No Packets</label>
                    <input type="text" placeholder="NoPackets" value={noPackets} onChange={event => setNoPackets(event.target.value)} className="ProductUpdateInput"></input>
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

                <button className="ProductUpdateButton" onClick={handleSubmit}>Add Product</button>
              </div>
            </form>
          </div>
          </Col>
          </Row>
        </Container>
        </div>
        </>) :
      (<h4>Access denied. You are not authorized to view this page.</h4>)}
      </div>
    </div>
  </div>
  )
}
