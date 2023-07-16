import logo from './logo.svg';
import './App.css';
import { CssBaseline } from '@mui/material';
import Todolist from './Todolist';
import Form from './form';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
     <CssBaseline/>
     <Box
      sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"10"}}>
         <Todolist/>
      </Box>
    
     
     
    
    </div>
  );
}

export default App;
