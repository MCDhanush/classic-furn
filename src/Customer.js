import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { CustomerList } from './CustomerList';

export function Customer() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    },
  });


  const [prod, setProd] = useState([]);

  const getFurn = () => {
    fetch("http://localhost:5000/customer")
      .then((e) => e.json())
      .then((e) => setProd(e));
  };
  React.useEffect(() => getFurn(), []);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Paper elevation={3} />
        <AppBar className='nav-p' onChange={() => setMode(mode ? `color=red` : "")} position="static">
          <Toolbar>
            <Typography className='classic-furn' variant="h5" component="div" sx={{ flexGrow: 1 }}>
              𝓒𝓵𝓪𝓼𝓼𝓲𝓬𝓕𝓾𝓻𝓷
            </Typography>
           
            <Button color="inherit"
              startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}>
              {mode === "light" ? "dark" : "light"} mode</Button>
          </Toolbar>
        </AppBar>
        <div className='prod-over'>

          {prod.map((e) => (
            // <h1>{e.name}</h1>,
            <CustomerList pord={e} />
          ))}
        </div>
        <Button  className='cus-bac' variant="contained"  onClick={()=>navigate(-1)}>back</Button>

      </ThemeProvider>
    </>
  );
}
