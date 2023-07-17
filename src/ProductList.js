import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Tippy from '@tippyjs/react';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { IconButton } from '@mui/material';






export function ProductList({ pord }) {

  const [openTag, setOpenTag] = useState(false)
  const [closeTag, setCloseTag] = useState(true)
  const [toogle,setToogle] = useState("")

  const navigate = useNavigate()
  return (<>
    <Card className='prod-head'>
      <img className='prod-img' src={pord.poster} />
      <CardContent>
        <div className='prod-cnt'>
          <h1 className='prod-h1'><b>Product :</b> {pord.name}</h1>
          <div className='inner-tag'> 
          <p><b>Price : </b> &#8377; {pord.rate}</p>
          <IconButton className='mark-bu' onClick={()=>setToogle(!toogle)}>{toogle ?<ArrowDropDownIcon/>: <ArrowDropUpIcon/>}</IconButton>
          </div>
          {toogle ? <p> <b> Details</b> : {pord.details}</p>:""}
          <p><b>Material:</b> {pord.material}</p>
          <div className='product-but'>
            <Tippy placement='bottom' theme='gradient' content="Shop">
              <Button color='success' onClick={()=>navigate("/shop")}><ShoppingBagRoundedIcon /></Button>
            </Tippy>
          </div>
        </div>
      </CardContent>
    </Card>

  </>);
}
