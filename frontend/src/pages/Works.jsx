import React from 'react'
import Workcard from '../components/Workcard'
import { Link } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";

const Works = () => {
  const works = [
    // fake data
    {
      id: 1,
      work_name: "Kalıp İşi",
      work_desc:
        "Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat",
      work_start_date: "2024 08 07",
      status: 0,
    },

    {
      id: 2,
      work_name: "Demir işi",
      work_desc:
        "Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat",
      work_start_date: "2021 08 07",
      status: 2,
    },

    {
      id: 3,
      work_name: "Duvar İşi",
      work_desc:
        "Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat",
      work_start_date: "2024 09 23",
      status: 1,
    },

    {
      id: 4,
      work_name: "Tadilat İşi",
      work_desc:
        "Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat",
      work_start_date: "2022 08 08",
      status: 1,
    },

    {
      id: 5,
      work_name: "Sıva İşi",
      work_desc:
        "İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat  ",
      work_start_date: "2024 08 07",
      status: 0,
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 m-auto w-[70%] ">
        {works.map((x, i) => {
          return <Workcard key={i} works={x} />;
        })}
      </div>
      <div className="flex justify-center  items-center mt-3 gap-2">
        <Link to={"/create-work"}>
          <button className="flex items-center justify-center w-[340px] gap-6 h-[70px] px-3  border-4  border-gray-700 py-1 bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
            <IoAddSharp className="  w-[40px] h-[40px]  " />
            <p className="font-bold text-center text-[25px]">İŞ EKLE </p>
          </button>
        </Link>
      </div>
    </>
  );
};


export default Works