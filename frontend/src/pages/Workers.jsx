import React from 'react'
import WorkerCard from '../components/WorkerCard'
import Button from '@mui/material/Button';
import { IoAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Workers = () => {
    const workers = [
      //fake data
      {
        id: 1,
        name: "Ali",
        surname: "Topal",
        phone_number: "0542 234 2132",
        work_id: 3,
        img: "https://i.pravatar.cc/301",
        wage: 2300,
      },
      {
        id: 2,
        name: "Yusuf",
        surname: "Boncuk",
        phone_number: "0542 234 2132",
        work_id: 3,
        img: "https://i.pravatar.cc/302",
        wage: 2700,
      },
      {
        id: 3,
        name: "Mehmet",
        surname: "Şimşek",
        phone_number: "0542 234 2132",
        work_id: 2,
        img: "https://i.pravatar.cc/303",
        wage: 2500,
      },
      {
        id: 4,
        name: "Mert",
        surname: "Bayram",
        phone_number: "0542 234 2132",
        work_id: 1,
        img: "https://i.pravatar.cc/304",
        wage: 2000,
      },
      {
        id: 5,
        name: "Ali",
        surname: "Topal",
        phone_number: "0542 234 2132",
        work_id: 3,
        img: "https://i.pravatar.cc/305",
        wage: 2300,
      },
      {
        id: 6,
        name: "Yusuf",
        surname: "Boncuk",
        phone_number: "0542 234 2132",
        work_id: 3,
        img: "https://i.pravatar.cc/306",
        wage: 2700,
      },
      {
        id: 7,
        name: "Mehmet",
        surname: "Şimşek",
        phone_number: "0542 234 2132",
        work_id: 2,
        img: "https://i.pravatar.cc/307",
        wage: 2500,
      },
      {
        id: 8,
        name: "Mert",
        surname: "Bayram",
        phone_number: "0542 234 2132",
        work_id: 1,
        img: "https://i.pravatar.cc/308",
        wage: 2000,
      },
    ];
  return (
    <>
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap 5'>
        
        {
            workers.map((x) =>{
                return <WorkerCard workers={x}/>
            })
        }
        <div className='flex justify-center items-center'>
            <Link to='/add-worker'>
                <Button variant="contained"><IoAddSharp className="w-[40px]"/> <p>
                    ÇALIŞAN EKLE </p>
                </Button>
            </Link>
            
        </div>

    </div>
    
    </>
  )
}

export default Workers