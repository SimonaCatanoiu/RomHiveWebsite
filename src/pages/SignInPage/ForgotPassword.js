import React, {useState,useEffect} from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Stack,Paper } from "@mui/material";

const initialFormValues = {
    username: "",
    newPassword: "",
    CheckPassword: ""
}


export default function ForgotPasswordForm(props)
{
    const { setOpenPopup } = props;
    const [values,setValues] = useState(initialFormValues);

    const handleInputChange = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
    })
    }

    const handleCancel = () => {
        setOpenPopup(false);
      };

    const handleSave = () => {
    setOpenPopup(false);
    };

    return ( 
        <Paper elevation={10} style={{
            padding: 10,
            margin:10,
          }}>
        <form>
        <Grid container alignItems="center">
            <Grid item xs={12}>
                <Stack spacing={1} marginLeft={2} justifyContent="center" direction="column"
  alignItems="center">
                        <TextField 
                        sx={{width: { sm: 350, md: 400 },"& .MuiInputBase-root": {height: 50}}} 
                    variant="outlined" label="Username" value={values.username} name="username" onChange={handleInputChange}
                        />
                        <TextField 
                        sx={{width: { sm: 350, md: 400 },"& .MuiInputBase-root": {height: 50}}}
                        id="outlined-password-input" type="password"  autoComplete="current-password" label="Password" name="newPassword" value={values.newPassword} onChange={handleInputChange}/>
                        <TextField 
                        sx={{width: { sm: 350, md: 400 },"& .MuiInputBase-root": {height: 50}}} 
                        id="outlined-password-input" label="Confirm Password" name="CheckPassword" value={values.CheckPassword} onChange={handleInputChange}
                        type="password"  autoComplete="current-password"
                        />
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={3}>
                                <Button variant="contained" style={{ backgroundColor:"#363937", height: "100%", width: "90%"}}
                                 onClick={handleSave}>Save</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" style={{backgroundColor:"#363937", height: "100%", width: "90%"}}
                                onClick={handleCancel}>Cancel</Button>
                            </Grid>
                        </Grid>
                </Stack>

            </Grid>
        </Grid>
        </form>
        </Paper>
    )
}