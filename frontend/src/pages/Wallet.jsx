import React from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import { BsBuildings } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";

const Wallet = () => {
  return (
    <div className="flex justify-center items-center gap-5  min-h-[700px]  w-full">
      <Link to={"/wallet-work"}>
        <div className="shadow-2xl">
          <Button variant="contained" className="w-[300px] h-[100px]">
            <BsBuildings className="w-[60px]  h-[60px] mr-10" />
            <p className="text-2xl font-bold">İŞ HESABI</p>
          </Button>
        </div>
      </Link>
      <div className="shadow-2xl">
        <Link to={"/wallet-worker"}>
          <Button variant="contained" className="w-[310px] h-[100px]">
            <GoPeople className="w-[60px]  h-[60px] mr-5" />
            <p className="text-2xl font-bold">ÇALIŞAN HESABI</p>
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default Wallet