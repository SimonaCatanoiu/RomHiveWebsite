import React, {useState,useEffect} from "react";
import "./AboutUs.css"
import { Grid, Typography } from "@mui/material";
import { Stack } from "react-bootstrap";

const initialFormValues = {
    username: "",
    newPassword: "",
    CheckPassword: ""
}

export default function ForgotPasswordForm(props)
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
                That’s why we made RoamHive, a travel site written by real experts, not anonymous reviewers. Our writers are locals with hometown pride, parents who are road trip heroes, cruise junkies who know every ship at sea, and virtually everyone else in-between.
                <br/><br/>
                We have more than 50 writers—from lifetime locals to licensed tour guides—sharing useful travel advice and inspiration from destinations around the world. RoamHive has been honored by multiple awards since its inception, including the Eppy Awards, the W3 Awards, and the Communicator Awards.
                <br/><br/>
                You’ll find that our 20-year-strong library of more than 30,000 articles will make you a savvy traveler—showing you how to book a hotel the whole family will love, where to find the best bagel in New York City, and how to skip the lines at theme parks. We give you the confidence to spend your vacation actually vacationing, not fumbling with a guidebook or second-guessing yourself.
                <br/><br/>
            </Typography>
            <button onClick={handleClose} type="button" class="btn btn-dark">Cancel</button>             
        </Stack>


        </div>
    )
}