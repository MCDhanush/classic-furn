import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export function Error() {
  const navigate = useNavigate();
  return (<>
    <div className='error-page'>
      <a onClick={() => navigate(-1)} className='error-h'>Go back</a>
    </div>
  </>);
}
