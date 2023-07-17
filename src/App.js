import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import  {Logins}  from './Logins';
import  {SignUp}  from './SignUp';
// import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Error } from './Error';
import "tippy.js/dist/tippy.cjs"
import { Products } from './Products';
import 'reactjs-popup/dist/index.css';
import 'reactjs-popup/dist/index.css';
import { Customer } from './Customer';



function App() {
  const navigate = useNavigate();
  return (<>
    <div className="App">
      <section>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users/login' element={<Logins/>} />
      <Route path='/users/signup' element={<SignUp/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/customer' element={<Customer/>} />
      <Route path='*' element={<Error/>}  />
      </Routes>
      </section>
    </div>
  </>);
}





export default App
