import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const WorkerCard = ({ workers }) => {
  const apiURL = "http://localhost:3000/";
  return (
    <div className=" flex flex-col justify-center items-center bg-white shadow-md rounded-xl m-3 w-[350px] p-5">
      <Link to={`/worker/${workers.id}`}>
        <img
          className="mx-auto w-[200px] h-[200px] rounded-full"
          src={apiURL + workers.image}
          alt=""
        />
        <div className="p-2 m-4">
          <h2 className="mt-1 text-xl text-center font-bold">
            {workers.name + " " + workers.surname}
          </h2>
        </div>

        <div className="flex justify-start m-2 w-full">
          <b className="text-left ">Telefon : &nbsp;</b>
          <p className="text-center">{workers.phone_number}</p>
        </div>
        <div className="flex m-2 justify-start">
          <b className="text-left">Çalıştığı iş : &nbsp; </b>
          <p className="text-center">{workers.work_name}</p>
        </div>
        <div className="flex m-2  justify-start">
          <b className="text-left">Yövmiye : &nbsp;</b>
          <p className="text-center">{workers.wage}</p>
        </div>
      </Link>
      <div className=" mt-6 flex  gap-2">
        <Link to={`/update-worker/${workers.id}`}>
          <button className="px-3 w-full cursor-pointer py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            <p className="font-bold text-center text-[17px]">
              ÇALIŞAN BİLGİLERİNİ DÜZENLE
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WorkerCard