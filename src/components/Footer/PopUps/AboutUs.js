import React  from "react";
import "./AboutUs.css"
import { Typography } from "@mui/material";
import { Stack } from "react-bootstrap";


export default function AboutUs(props)
{
    const { setOpenPopup } = props;

    const handleClose = () => {
        setOpenPopup(false);
      };

    return (
        <div>
        <Stack spacing={1} marginLeft={2} justifyContent="center" direction="column"
        alignItems="center">
            <img src="../../images/hello.jpg" alt="" className="img-fluid"/>
            <Typography variant="body2">
                <br/><br/>
                Like you, we had no idea who to trust for travel advice.
                <br/><br/>
                That’s why we made RoamHive, a travel site created by real experts. Our guides are locals with hometown pride, parents who are road trip heroes, cruise junkies who know every ship at sea, and virtually everyone else in-between.
                <br/><br/>
                We believe that the world is meant to be explored and that travel is an essential part of life. We are a team of passionate travel experts dedicated to curating bespoke travel experiences for our clients.
                <br/><br/>
                Our travel specialists have extensive knowledge of destinations around the world, and we pride ourselves on offering insider access to the most incredible experiences. Whether you're looking to immerse yourself in local cultures, discover hidden gems, or simply relax and recharge, we've got you covered.
                <br/><br/>
                We are committed to sustainability and responsible travel, and we work closely with our partners to ensure that our itineraries have a positive impact on the environment and the communities we visit.
                <br/><br/>  
                Because travel should be stress-free and seamless, we have taken care of all the details for your, from accommodations to local transportation and activities. Our goal is to provide unparalleled customer service, ensuring that your travel experience is smooth, enjoyable, and unforgettable.
                <br/><br/>  
                So whether you're looking for a romantic getaway, a family vacation, or an adventure of a lifetime, let us help you create the perfect itinerary that meets all your travel dreams. Contact us today to start planning your next adventure!                
                <br/><br/>  
            </Typography>
            <button onClick={handleClose} type="button" class="btn btn-dark">Cancel</button>             
        </Stack>


        </div>
    )
}