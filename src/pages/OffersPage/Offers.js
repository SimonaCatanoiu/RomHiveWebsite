import React, {useState,useEffect} from "react";
import CommonSection from "./CommonSection/CommonSection";
import Footer from "../../components/Footer/Footer.js"
import { Col, Container, Row } from "react-bootstrap";
import OfferCard from "./OfferCard/OfferCard"
import OfferData, { offerData } from "./OfferCard/OffersData"
import SearchBar from "../../components/SearchBar/SearchBar";
import './Offers.css'

const Offers = () => 
{

  const [pageCount,setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  useEffect(()=>
    {
      const pages = Math.ceil(5/4); //de modificat in backend
      setPageCount(pages);
    },[page]
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
        <Row>
          {
            offerData?.map(offer=>
            <Col lg='3' className="mt-3" key={offer.id}>
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
      </Container>
    </section>
    <section>
      <Footer></Footer>
    </section>
  </div>
}
export default Offers;