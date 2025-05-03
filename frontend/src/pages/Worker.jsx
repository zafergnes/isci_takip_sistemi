import React from 'react'
import { Link, useParams } from "react-router-dom";

const Worker = () => {
  let { id } = useParams();
  /* !
    Kullanıcı hakkında tüm bilgiler:
      email, telefon
    Kullanının Son Aylar Çalıştığı Calender

  */
  const workers = {
    //fake data

    id: 1,
    name: "Ali",
    surname: "Topal",
    phone_number: "0542 234 2132",
    work_id: 3,
    email: "alitopal@gmail.com",
    img: "https://i.pravatar.cc/301",
    wage: 2300,
    registration_date: "2023-05-06",
    workedDays: [
      "2025-05-05",
      "2025-05-06",
      "2025-05-07",
      "2025-05-11",
      "2025-05-12",
      "2025-05-13",
    ],

  };

  return (
    <div>
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
            <p className="text-center">{workers.work_id}</p>
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
            <p className="text-center">{workers.email}</p>
          </div>
          <div className="flex justify-start m-2 w-full">
            <b className="text-left ">İşe Başlama Tarihi :&nbsp;</b>
            <p className="text-center">{workers.registration_date}</p>
          </div>
        </div>
        <div className="flex  justify-between mx-20 mt-15 w-full  items-center  gap-2 ">
          <Link to={`/days_worked/${workers.id}`}>
            <button className="flex items-center justify-center  gap-6 h-[70px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
              <p className="font-bold text-center text-xl">Verileri Gör</p>
            </button>
          </Link>
          <Link to={`/update-worker/${workers.id}`}>
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
    </div>
  );
};

export default Worker