import React from "react";

export default function SuccessPopUp(props)
{
    const { setOpenPopup } = props;
    return ( 
        <button className="btn btn-dark my-1 mb-3" onClick={() => setOpenPopup(false)}>Close</button>
    )
}