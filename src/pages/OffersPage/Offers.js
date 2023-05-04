import React, {useState,useEffect} from "react";
import CommonSection from "./CommonSection/CommonSection";
import Footer from "../../components/Footer/Footer.js"
import { Col, Container, Row } from "react-bootstrap";
import OfferCard from "./OfferCard/OfferCard"
import SearchBar from "../../components/SearchBar/SearchBar";
import './Offers.css'

import useFetch from './../../hooks/useFetch.js'
import {BASE_URL} from '../../utils/config.js'

const Offers = () => 
{

  const [pageCount,setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  const {data:offers,loading,error} = useFetch(`${BASE_URL}/offers?page=${page}`)
  const {data:offerCount} = useFetch(`${BASE_URL}/offers/search/getOfferCount`)

  useEffect(()=>
    {
      const pages = Math.ceil(offerCount/8); 
      setPageCount(pages);
      window.scrollTo(0,0)
    },[page,offerCount,offers]
  );

  return <div>
    <br></br>
    <br></br>
    <br></br>
    <CommonSection title={"All Tours"}></CommonSection>
    <section>
      <Container>
        <Row className="mt-4"> 
          <SearchBar></SearchBar>
        </Row>
      </Container>
    </section>
    <section className="mt-4">
      <Container>
        {
          loading && <h4 className="text-center pt-5">Loading...</h4>
        }
        {
          error && <h4 className="text-center pt-5">{error}</h4>
        }
        {
          !loading && !error && <Row>
          {
            offers?.map(offer=>
            <Col lg='3' className="mt-3" key={offer._id}>
              <OfferCard offer={offer}/>
            </Col>)
          }

          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number =>
                (
                  <span key={number} onClick={()=>setPage(number)}
                  className={page===number?'active__page':''}
                  >
                    {number+1}
                  </span>
                ))}
            </div>
          </Col>
        </Row>
        }
      </Container>
    </section>
    <section>
      <Footer></Footer>
    </section>
  </div>
}
export default Offers;