import React,{useState} from 'react'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Col,Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Admin.css"
import "./TripsEdit.css"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function TripsEdit() {

  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");
  
  const handleFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePath(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setFilePath("");
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
                  <input type="text" placeholder="Trip Title" className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                  <label>Trip City</label>
                  <input type="text" placeholder="Trip City" className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                  <label>Distance</label>
                  <input type="text" placeholder="Distance" className="ProductUpdateInput"></input>
                </div>

                <div className="ProductUpdateItem">
                    <label>Address</label>
                    <input type="text" placeholder="Address" className="ProductUpdateInput"></input>
                  </div>


                <div className="ProductUpdateItem">
                  <label>Description</label>
                  <textarea name="textarea" placeholder="Description" className="ProductUpdateTextArea"></textarea>
                </div>
                

              </div>

              <div className="ProductUpdateRight">
                <div>
                  <div className="ProductUpdateItem">
                    <label>Price</label>
                    <input type="text" placeholder="Price" className="ProductUpdateInput"></input>
                  </div>

                  <div className="ProductUpdateItem">
                    <label>Featured</label>
                    <input type="text" placeholder="Featured" className="ProductUpdateInput"></input>
                  </div>
                  <div className="ProductUpdateItem">
                    <label>Max Group Size</label>
                    <input type="text" placeholder="Size" className="ProductUpdateInput"></input>
                  </div>

                  <div className="ProductUpdateItem">
                    <div className="userEditUpdateItem">
                      <label>Choose Trip Picture:</label>
                      <label for="file-upload" class="custom-file-upload">
                      <DriveFolderUploadIcon/>Upload
                      </label>
                      <input id="file-upload" type="file" onChange={handleFileSelected}/>
                      <label>{filePath}</label>
                    </div>         
                </div>
                </div>

                <button className="ProductUpdateButton">Add Product</button>
              </div>
            </form>
          </div>
          </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  </div>
  )
}
