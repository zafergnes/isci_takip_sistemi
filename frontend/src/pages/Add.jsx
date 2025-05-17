import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdAddBusiness } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { MdOutlineSwitchAccessShortcutAdd  } from "react-icons/md";
import { BsDatabaseFillAdd } from "react-icons/bs";


const Add = () => {
  return (
    <>
    <div className="min-h-[600px] m-auto w-[60%] mt-[15%]">
      <div className="flex justify-center items-center gap-5  m-5 ">
        <Link to={"/create-work"}>
          <div className="shadow-2xl">
            <Button variant="contained" className="w-[300px] h-[100px]">
              <MdAddBusiness className="w-[60px]  h-[60px] mr-5" />
              <p className="text-2xl font-bold">İŞ EKLE</p>
            </Button>
          </div>
        </Link>
        <div className="shadow-2xl">
          <Link to={"/add-worker"}>
            <Button variant="contained" className="w-[300px] h-[100px] ">
              <IoMdPersonAdd className="w-[60px]  h-[60px] mr-5" />

              <p className="text-2xl font-bold">ÇALIŞAN EKLE</p>
            </Button>
          </Link>
        </div>

      </div>
      <div className="flex justify-center items-center gap-5 m-5 ">
        <Link to={"/add-work-payments"}>
          <div className="shadow-2xl">
            <Button variant="contained" className="w-[390px] h-[100px]">
              <BsDatabaseFillAdd  className="w-[60px]  h-[60px] mr-5 " />
              <p className="text-2xl font-bold">İŞ'E ÖDEME EKLE</p>
            </Button>
          </div>
        </Link>
        <div className="shadow-2xl">
          <Link to={"/add-worker-payments"}>
            <Button variant="contained" className="w-[390px] h-[100px] ">
              <MdOutlineSwitchAccessShortcutAdd  className="w-[60px]  h-[60px] mr-5" />

              <p className="text-2xl font-bold">ÇALIŞAN'A ÖDEME YAP</p>
            </Button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Add