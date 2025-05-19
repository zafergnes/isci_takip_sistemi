import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getWorkerandWorkById } from '../Api/Api';

const Worker = () => {
  let { id } = useParams();
  const [workers, setWorkers] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const worker = await getWorkerandWorkById(id);
      setWorkers(worker.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {workers && (
        <div className="p-7 mx-auto flex flex-wrap justify-center items-center m-20 bg-white rounded-2xl shadow-xl w-[60%] ">
          <img className=" h-[300px] rounded-full" src={workers.img} alt="" />
          <div className="p-2 m-4">
            <h2 className="mt-1 text-3xl text-center font-bold">
              {workers.name + " " + workers.surname}
            </h2>
          </div>
          <div className="flex justify-start flex-col ml-[5%] text-xl">
            <div className="flex m-2 justify-start">
              <b className="text-left ">Çalıştığı iş : &nbsp;</b>
              <p className="text-center">{workers.work_name}</p>
            </div>
            <div className="flex m-2  justify-start">
              <b className="text-left w-[110px">Yövmiye : &nbsp;</b>
              <p className="text-center">{workers.wage}</p>
            </div>
            <div className="flex justify-start m-2 w-full">
              <b className="text-left ">Telefon :&nbsp;</b>
              <p className="text-center">{workers.phone_number}</p>
            </div>
            <div className="flex justify-start m-2 w-full">
              <b className="text-left ">E-Mail :&nbsp;</b>
              <p className="text-center">{workers.mail}</p>
            </div>
            <div className="flex justify-start m-2 w-full">
              <b className="text-left ">İşe Başlama Tarihi :&nbsp;</b>
              <p className="text-center">{workers.date}</p>
            </div>
          </div>
          <div className="flex  justify-between mx-20 mt-15 w-full  items-center  gap-2 ">
            <Link to={`/wallet-worker-data/${id}`}>
              <button className="flex items-center justify-center  gap-6 h-[70px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
                <p className="font-bold text-center text-xl">Verileri Gör</p>
              </button>
            </Link>
            <Link to={`/update-worker/${workers?.id}`}>
              <button className="flex items-center justify-center  gap-6 h-[70px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
                <p className="font-bold text-center text-xl ">
                  Çalışan Bilgilerini Düzenle
                </p>
              </button>
            </Link>
            <button className="flex items-center justify-center  gap-6 h-[70px] p-7   bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
              <p className="font-bold text-center text-xl">Çalışanı Sil</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Worker