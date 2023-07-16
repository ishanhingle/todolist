import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { useState } from 'react';
const Form=({addItem})=>{
  const [text,setText]=useState("");
  const HandleChange=(e)=>{
   setText((prev)=>{return e.target.value});
  }
 
  return(
        <form onSubmit={(e)=>{e.preventDefault() 
                       addItem(text)}}>
           <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end"><IconButton type='submit'><AddTaskIcon/></IconButton></InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            value={text}
            onChange={HandleChange}
            aria-label='Add ToDO'
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">AddTask</FormHelperText>
        </FormControl>
        </form>
    )
}
export default Form;