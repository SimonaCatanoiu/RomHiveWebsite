import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import "./Contact.css"

export default function Contact(props)
{
    const { setOpenPopup } = props;

    const handleClose = () => {
        setOpenPopup(false);
      };

    return ( 
        <>
            <section class="mb-4">
                <h5 class="h1-responsive font-weight-bold text-center my-2 mb-4">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</h5>
                <div class="row">
                    <div class="col-md-12 mb-md-0 mb-5 text-center">
                        <ul class="list-unstyled mb-0 ul_style">
                            <li><LocationOnIcon></LocationOnIcon>Bucharest, CA 394 238 12, Romania</li>
                            <li><LocalPhoneIcon></LocalPhoneIcon>+40722507303</li>
                            <li><MailIcon></MailIcon>roamhive@gmail.com </li>
                        </ul>
                        <br/>
                    </div>
                    <button onClick={handleClose} type="button" class="btn btn-dark">Cancel</button>             
                </div>
            </section>
        </>
    )
}

