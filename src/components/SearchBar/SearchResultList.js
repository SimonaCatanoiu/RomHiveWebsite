import React,{useState} from 'react'

import CommonSection from './../../pages/OffersPage/CommonSection/CommonSection.js'
import { Container,Row,Col } from 'react-bootstrap';
import { useLocation } from 'react-router';
import OfferCard from '../../pages/OffersPage/OfferCard/OfferCard.js';
import Footer from '../Footer/Footer.js';

const SearchResultList = ()=> {
    
    const location = useLocation()
    const [data] = useState(location.state)
    
    return <>
    <br></br>
    <br></br>
    <br></br>
    <CommonSection title='Search Result'/>
    <section>
        <Container>
            <Row>
                {
                    data.length===0 ? <div><br/><h4 className='text-center'>No offer found</h4></div> : 
                    data?.map(offer => 
                    <Col lg='3' className='mt-4 mb-4' key={offer._id}>
                        <OfferCard offer={offer}/>
                    </Col>)
                }
            </Row>
        </Container>
    </section>
    <Footer></Footer>
    </>
};

export default SearchResultList;