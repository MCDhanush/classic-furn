import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Typical from 'react-typical'


export function Home() {
  const navigate = useNavigate();
  // const {text} =useTypewriter({
  //   words:["Furniture","Classical","Classic-Furn.."],
  //   loop:{},
  //   typeSpeed:120,
  //   deleteSpeed:80,
  // })

  return (<>
      <AppBar position="static">
        <Toolbar >
          <Typography className='classic-furn' variant="h5" component="div" sx={{ flexGrow: 1 }}>
           𝓒𝓵𝓪𝓼𝓼𝓲𝓬𝓕𝓾𝓻𝓷
          </Typography>
          <Button color="inherit" onClick={() => navigate('/users/login')}>Login</Button>
          <Button color="inherit"  onClick={() => navigate('/users/signup')}>SignUp</Button>
        </Toolbar>
        </AppBar>
        <div className='home-content'>
          <div className='head-info'>
          <h1 className='home-head'>Purchase your's.....</h1>
          <h4 className='home-p'> Check out your products from  &nbsp;
          <Typical loop={1}  wrapper="b" className="typicall" steps={[
            "",1000,"Furniture",1500,"Classical",1500,"Classic_furn",1500
          ]}
          />
          </h4>
         <p className='head-p2'>
           More Information to login 
           {/* <span style={{fontWeight:"bold",color:"green"}}>{text}</span>
            <span style={{color:"red"}}><Cursor cursorStyle="<" />{text}</span> */}
            </p>
            <Button onClick={()=>navigate("/users/login")} color="secondary" variant="contained">View Products</Button>
          </div>
        </div>
  </>);
}
