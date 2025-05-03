import React from 'react'
import { Link, useParams } from "react-router-dom";

const Work = () => {
  let { id } = useParams();
  const works = {
    //fake data

    id: 5,
    work_name: "Sıva İşi",
    work_desc:
      "İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat  ",
    work_start_date: "2024 08 07",
    status: 0,
    work_address: "İstanbuldaki 3 katlı inşaat",
  };
  const workers = [
    {
      id: 1,
      name: "Yusuf",
      surname: "Boncuk",
      phone_number: "0542 123 45 56",
      email: "yusufboncuk@gmail.com",
      img: "https://i.pravatar.cc/302",
      wage: 2500,
      registration_date: "2023-11-15",
    },
    {
      id: 2,
      name: "Ali",
      surname: "Topal",
      phone_number: "0542 123 45 56",
      email: "alitopal@gmail.com",
      img: "https://i.pravatar.cc/301",
      wage: 2500,
      registration_date: "2023-05-06",
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Şimşek",
      phone_number: "0542 123 45 56",
      email: "mehmetsimsek@gmail.com",
      img: "https://i.pravatar.cc/303",
      wage: 2500,
      registration_date: "2024-08-16",
    },
    {
      id: 4,
      name: "Mert",
      surname: "Bayram",
      phone_number: "0542 123 45 56",
      email: "mertbayram@gmail.com",
      img: "https://i.pravatar.cc/304",
      wage: 2500,
      registration_date: "2024-01-01",
    },
    {
      id: 5,
      name: "Enes",
      surname: "Kara",
      phone_number: "0542 123 45 56",
      email: "eneskara@gmail.com",
      img: "https://i.pravatar.cc/306",
      wage: 2500,
      registration_date: "2023-05-06",
    },
  ];
  return (
    <div>
      <div className="bg-white rounded-3xl flex  justify-center items-center mx-auto p-5 w-[70%]">
        <div>
          <div>
            <span className="flex justify-end px-5 pt-2">
              <b>İşe Başlanma Tarihi :&nbsp;</b>
              {works.work_start_date}
            </span>
            <p className="text-3xl font-bold text-center">{works.work_name}</p>
          </div>
          <div className="px-4">
            <label className="text-xl italic font-bold">Açıklama </label>
            <p className="text-[17px] ">{works.work_desc}</p>
          </div>

          <div className="flex flex-col items-start pl-4">
            <div className=" ">
              <p className="font-bold italic text-xl my-5">Çalışan İşçiler ;</p>
              {workers.map((x, i) => {
                return (
                  <div className="flex justify-start items-center">
                    <p className="m-2 font-bold text-xl">{i + 1}</p>
                    <img
                      className="h-[60px] rounded-full mx-3 my-1"
                      src={x.img}
                    />
                    <div className="w-[130px]">
                      <p className=" font-bold">{x.name + " " + x.surname}</p>
                    </div>
                    <div className="flex">
                      <p className="ml-5">
                        <b>Telefon :&nbsp;</b>
                        {x.phone_number}
                      </p>
                      <p className="ml-5">
                        <b>Yevmiye :&nbsp;</b>
                        {x.wage}
                      </p>
                      <p className="ml-5">
                        <b>Başlama Tarihi:&nbsp;</b>
                        {x.registration_date}
                      </p>
                    </div>
                    <div className="flex justify-center items-center ml-10 gap-5">
                      <Link to={`/days_worked/${x.id}`}>
                        <button className="flex items-center justify-center w-[100x]  h-[20px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
                          <p className="font-bold text-center ">Verileri Gör</p>
                        </button>
                      </Link>
                      <Link to={`/days_worked/${x.id}`}>
                        <button className="flex items-center justify-center w-[100x]  h-[20px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
                          <p className="font-bold text-center ">
                            Çalışanı Çıkar
                          </p>
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work