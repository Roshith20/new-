import { Button, FormControl, InputLabel, MenuItem, Select, TextField} from'@mui/material'
import React from 'react' 



const Course = () => {
  return (
    <div>
        <h1>
           <i>Add Course</i> 
        </h1>
    
        <TextField id="standard-basic" label="Course Id" variant="standard" /><br></br><br></br>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>

        <InputLabel id="demo-simple-select-label">Course Name</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Course Name"
        
        
          
        >
          <MenuItem value={10}>Cardio</MenuItem>
          <MenuItem value={10}>Strength Training</MenuItem>
          <MenuItem value={10}>Calisthenics</MenuItem>
        </Select>
      </FormControl> <br /><br />

        <TextField id="standard-basic" label="Description" variant="standard" /><br></br><br></br>
        <TextField id="standard-basic" label="Payment" variant="standard" /><br></br><br></br>
        <TextField id="standard-basic" label="Status" variant="standard" /><br></br><br></br>
        <Button variant="contained">Submit</Button>

    </div>
  )
}

export default Course