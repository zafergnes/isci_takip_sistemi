import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Add = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
        <Link to={"/create-work"}>
            <Button variant='contained'>İŞ EKLE</Button>
        </Link>
        <Link to={"/add-worker"} >
            <Button variant='contained'>ÇALIŞAN EKLE</Button>
        </Link>        
    </div>
  )
}

export default Add