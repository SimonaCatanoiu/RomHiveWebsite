import React from 'react'
import OfferCard from './OfferCard'
import { Col } from 'react-bootstrap'
import {offerData} from "./OffersData"

const OfferList = () => {

    return <>
       {
        offerData?.map(offer=>(
            <Col lg='3' className='mb-4' key={offer.id}>
                <OfferCard offer={offer}></OfferCard>
            </Col>
        ))
       } 
    </>
}

export default OfferList