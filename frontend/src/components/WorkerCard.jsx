import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const WorkerCard = ({ workers }) => {
    

  return (
    <div className=' bg-white shadow-md rounded-xl m-3 w-[300px] p-5'>
        <Link to={`/worker/${workers.id}`}>
        <img className='mx-auto h-[150px] rounded-full' src={workers.img} alt="" />
        <div className='p-2 m-4'>
            <h2 className='mt-1 text-xl text-center font-bold'>
                {workers.name+" "+workers.surname}
            </h2>
        </div>
        
        <div  className='flex justify-start m-2 w-full'>
            <b className='text-left '>Telefon :</b>
            <p className='text-center'>{workers.phone_number}</p>
        </div>
        <div  className='flex m-2 justify-start'>
            <b className='text-left'>Çalıştığı iş : </b>
            <p className='text-center'>{workers.work_id}</p>
        </div>
        <div className='flex m-2  justify-start'>
            <b className='text-left'>Yövmiye : </b>
            <p className='text-center'>{workers.wage}</p>
        </div>
        <div className='flex m-4 justify-center items-center'>
            <Button onClick={()=>{alert("Tıklandı")}} className='' variant="contained">Düzenle</Button>
        </div>
        
            
        </Link>
    </div>
  )
}

export default WorkerCard