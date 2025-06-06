import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteWorker, getWorkerandWorkById } from "../Api/Api";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Worker = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const workerdata = await getWorkerandWorkById(id);
      setWorkers(workerdata?.data);
    }
    fetchData();
  }, [id]);
  const apiURL = "http://localhost:3000/";

  if (workers != []) {
    <div>
      <p>sıkıntı</p>
    </div>;
  }
  const handleDelete = async () => {
    try {
      if (confirm("Çalışanı Silmek İstediğinize Emin Misiniz?")) {
        const deletedWorker = await deleteWorker(id);
        if (deletedWorker.desc === 1) {
          toast.success("Çalışan Başarıyla Silindi.");
          navigate("/workers");
        } else {
          toast.warning("Çalışan Silinemedi. Bir hata oluştu.");
        }
      } else {
        toast.info("Silinmekten Vazgeçildi!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {workers && (
        <div className="p-7 mx-auto flex flex-wrap justify-center items-center m-20 bg-white rounded-2xl shadow-xl w-[60%] ">
          <img
            className=" h-[250px] w-[250px] rounded-full"
            src={apiURL + workers.image}
            alt=""
          />
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

            {workers.work_name === "İşi Yok" ? null : (
              <div className="flex justify-start m-2 w-full">
                <b className="text-left ">İşe Başlama Tarihi :&nbsp;</b>
                <p className="text-center">{workers.date}</p>
              </div>
            )}
          </div>
          <div className="flex  justify-between mx-20 mt-15 w-full  items-center  gap-2 ">
            <Link to={`/wallet-worker-data/${id}`}>
              <button className="flex items-center justify-center cursor-pointer gap-6 h-[70px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
                <p className="font-bold text-center text-xl">Verileri Gör</p>
              </button>
            </Link>
            <Link to={`/update-worker/${id}`}>
              <button className="flex items-center justify-center cursor-pointer gap-6 h-[70px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
                <p className="font-bold text-center text-xl ">
                  Çalışan Bilgilerini Düzenle
                </p>
              </button>
            </Link>
            <button
              onClick={() => handleDelete()}
              className="flex items-center justify-center gap-6 h-[70px] p-7 font-bold   text-center text-xl  bg-red-500 text-white rounded-xl shadow-2xl  hover:bg-red-800 cursor-pointer"
            >
              <MdDelete />
              Çalışanı Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Worker