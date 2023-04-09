import React from "react"
import './SearchBar.css'
import { Col, Form, FormGroup } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return <>
    <Col lg='12'>
        <div className="search__bar my-2">
           <Form className="d-flex align-items-center gap-4">
           <Col lg='3'>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <div class="container_form mx-4">
                        <h6><span><LocationOnIcon></LocationOnIcon></span>Location</h6>
                        <input type="text" placeholder="Where are you going?" className="form-control p-1"/>    
                    </div>
                </FormGroup>
            </Col>
            <Col lg='3'>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <div class="container_form">
                        <h6><span><AddLocationAltIcon></AddLocationAltIcon></span>Distance</h6>
                        <input type="number" placeholder="Distance km/h" className="form-control p-1"/>    
                    </div>
                </FormGroup>
            </Col>
            <Col lg='3'>
                <FormGroup className="d-flex gap-3 form__group form__group-last">
                    <div class="container_form">
                        <h6><span> <GroupsIcon></GroupsIcon> </span>People</h6>
                        <input type="number" placeholder="0" className="form-control p-1 mx-3"/>                       
                    </div>
                </FormGroup>
            </Col>
            <Col lg='2' className="d-flex align-items-right">
            <a href="/offers" class="link_search">
                <span className="search__icon" type="submit">
                <SearchIcon></SearchIcon>Search
                </span>
            </a>
            </Col>

           </Form>
        </div>
    </Col>
    </> 
};

export default SearchBar;