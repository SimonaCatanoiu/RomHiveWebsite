import React from "react";
import {TextField, Typography } from "@mui/material";

export default function Newsletter(props)
{
    const { setOpenPopup } = props;
    
    const handleClose = () => {
        setOpenPopup(false);
      };

    return ( 
        <div>
          <Typography variant="body2">
            To subscribe to our newsletter, please enter your email address here. We
            will send updates occasionally with our latest discounts.
          </Typography>
          <TextField autoFocus margin="dense" id="name" label="Email Address"
            type="email" fullWidth variant="standard" />
          <div className="container gap-2 justify-content-center">
            <div class="row">
              <div class="col">
                <button onClick={handleClose} type="button" class="btn btn-dark my-3">Save</button>             
              </div>
              <div class="col">
                <button onClick={handleClose} type="button" class="btn btn-dark my-3">Cancel</button>            
              </div>
            </div>
         </div>
      </div>
    )
}