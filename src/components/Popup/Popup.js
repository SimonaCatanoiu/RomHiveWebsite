import { Dialog, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import "../../pages/SignInPage/SignIn.css"

export default function Popup(props)
{
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const {title,children,openPopup,setOpenPopup} = props;
    
    const handleClose = () => {
        setOpenPopup(false);
    };

    return (
        <Dialog open={openPopup} onClose={handleClose} fullScreen={fullScreen}
         aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle style={{textAlign: "center"}} id="responsive-dialog-title">
                <h1 id="header2">{title}</h1>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}