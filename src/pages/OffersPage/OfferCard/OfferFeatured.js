import React from 'react'
import OfferCard from './OfferCard'
import { Col } from 'react-bootstrap'

import useFetch from '../../../../hooks/useFetch.js'
import {BASE_URL} from '../../../utils/config.js'

const OfferList = () => {

    const {data:OffersList,loading,error} = useFetch(`${BASE_URL}/offers/search/getFeaturedOffers`)

    return <>
        {
            loading && <h4>Loading.....</h4>
        }
        {
            error && <h4>{error}</h4>
        }
       {
        !loading && !error && OffersList?.map(offer=>(
            <Col lg='3' className='mb-4' key={offer._id}>
                <OfferCard offer={offer}></OfferCard>
            </Col>
        ))
       } 
    </>
}

export default OfferList