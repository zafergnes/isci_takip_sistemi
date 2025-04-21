import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Add = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-5  h-full w-full">
        <Link to={"/create-work"}>
          <div className="shadow-2xl">
            <Button variant="contained" className="w-[300px] h-[100px]">
              <img src="./worker_icon.svg" alt="" className="w-[60px] mr-5" />
              <p className="text-2xl font-bold">İŞ EKLE</p>
            </Button>
          </div>
        </Link>
        <div className="shadow-2xl">
          <Link to={"/add-worker"}>
            <Button variant="contained" className="w-[300px] h-[100px] ">
              <img src="./build.svg" alt="" className="w-[60px] mr-5" />
              <p className="text-2xl font-bold">ÇALIŞAN EKLE</p>
            </Button>
          </Link>
        </div>
        <div className="shadow-2xl">
          <Link to={"/add-worker"}>
            <Button variant="contained" className="w-[350px] h-[100px] ">
              <img src="./build.svg" alt="" className="w-[60px] mr-5" />
              <p className="text-2xl font-bold">İŞ'E ÇALIŞAN EKLE</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Add