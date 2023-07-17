import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function CustomerList({ pord }) {
  const navigate = useNavigate();
  const [toogle, setToogle] = useState("");
  return (
    <>
      <Card className='prod-head pv'>
        <img className='prod-img pvi' src={pord.poster} />
        <CardContent>
          <div className='prod-cnt pve'>
            <h1 className='prod-h1'><b>Name :</b> {pord.name}</h1>
            <div className='inner-tag'>

              <p> <b> Details</b> : {pord.details}</p>


            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
