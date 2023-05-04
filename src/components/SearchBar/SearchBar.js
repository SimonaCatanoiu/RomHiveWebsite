import React, {useRef} from "react"
import './SearchBar.css'
import { Col, Form, FormGroup, Row } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import {BASE_URL} from "../../utils/config.js"
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const locationRef = useRef("")
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()

    const searchHandler =async() => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location==="" || distance===""||maxGroupSize==="")
        {
            return alert("All fields are required!");
        }

        const res = await fetch(`${BASE_URL}/offers/search/getOfferBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        if(!res.ok) alert('Something went wrong')

        const result = await res.json()
        console.log(result)
        navigate(`/offers/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
        {state:result.data})
        }

    return <>
    <Col lg='12'>
        <div className="search__bar my-2">
           <Form>
           <Row  className="d-flex align-items-center try_class">
           <Col lg='3'>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <div class="container_form">
                        <h6><span><LocationOnIcon></LocationOnIcon></span>Location</h6>
                        <input type="text" ref={locationRef} placeholder="Where are you going?" className="form-control p-1"/>    
                    </div>
                </FormGroup>
            </Col>
            <Col lg='3'>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <div class="container_form">
                        <h6><span><AddLocationAltIcon></AddLocationAltIcon></span>Distance</h6>
                        <input type="number" ref={distanceRef} placeholder="Distance km/h" className="form-control p-1"/>    
                    </div>
                </FormGroup>
            </Col>
            <Col lg='3'>
                <FormGroup className="d-flex gap-3 form__group form__group-last">
                    <div class="container_form">
                        <h6><span> <GroupsIcon></GroupsIcon> </span>People</h6>
                        <input type="number" ref={maxGroupSizeRef} placeholder="0" className="form-control p-1 mx-3"/>                       
                    </div>
                </FormGroup>
            </Col>
            <Col lg='3' className="d-flex align-items-center justify-content-center">
                <span onClick={searchHandler} class="link_search">
                <span className="search__icon" type="submit">
                <SearchIcon></SearchIcon>Search
                </span>
            </span>
            </Col>
            </Row>
           </Form>
        </div>
    </Col>
    </> 
};

export default SearchBar;