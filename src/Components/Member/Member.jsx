import { Button,  TextField } from '@mui/material'
import React from 'react'

const Member = () => {
  return (
    <div>
        <h1>
            <i>Add Member</i>
        </h1>
        <TextField id="standard-basic" label="Ad.No" variant="standard" /><br></br>
        <TextField id="standard-basic" label="Name" variant="standard" /><br></br>
        <TextField id="standard-basic" label="Place" variant="standard" /><br></br>
        <TextField id="standard-basic" label="Pincode" variant="standard" /><br></br>
        <TextField id="standard-basic" label="Contact No" variant="standard" /><br></br>
        <TextField id="standard-basic" label="Age" variant="filled" /><br></br>
        <TextField id="standard-basic" label="Height" variant="filled" /><br></br>
        <TextField id="standard-basic" label="Weight" variant="standard" /><br></br>
        <TextField id="standard-basic" label="Course" variant="filled" /><br></br>
        <TextField id="filled-basic" label="Amount" variant="filled" /><br></br>
        <TextField id="filled-basic" label="Date of joining" variant="filled" /><br></br>
        <TextField id="filled-basic" label="Admission Fee" variant="filled" /><br></br>
        <Button variant="outlined" color="error">
  Submit
</Button>

        
        
    </div>

  )
}

export default Member