import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from "react-router-dom"
import styled from 'styled-components'

const StyledLink = styled(Link)`
    color:#d2386c;
`;

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start mdb-footer'>
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow>
            <MDBCol md="3" className='mx-1 mb-2 my-4'>
              <h6 className='text-uppercase fw-bold mb-2'>
                <MDBIcon icon="gem" className="me-3" />
                RoamHive
              </h6>
              <p>
                <img src="../../../images/logo2.png" alt="" className="img-fluid footer_img"/>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" className='mx-auto mb-2 my-4'>
              <h6 className='text-uppercase fw-bold mb-2'>Information</h6>
              <p>
                <a href='' className='text-reset'>About</a>
              </p>
              <p>
                <a href='' className='text-reset'>Contact</a>
              </p>
              <p>
                <a href='' className='text-reset'>Edit Profile</a>
              </p>
              <p>
                <a href='' className='text-reset'>Subscribe to newslatter</a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" className='mx-auto mb-2 my-4'>
              <h6 className='text-uppercase fw-bold mb-2'>Useful links</h6>
              <p>
              <StyledLink to='/offers'>
              <a href='#' className='text-reset'>
                  Offers
                </a>
              </StyledLink>
              </p>
              <p>
              <StyledLink to='/reviews'>
                <a href='#' className='text-reset'>
                  Reviews
                </a>
                </StyledLink>
              </p>
              <p>
              <StyledLink to='/signin'>
                <a href='#' className='text-reset'>
                  Sign In
                </a>
                </StyledLink>
              </p>
              <p>
              <StyledLink to='/signUp'>
                <a href='#' className='text-reset'>
                  Sign Up
                </a>
                </StyledLink>
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-muted  p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <FacebookIcon></FacebookIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <GoogleIcon></GoogleIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <InstagramIcon></InstagramIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <LinkedInIcon></LinkedInIcon>
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
