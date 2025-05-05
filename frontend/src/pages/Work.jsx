import React from "react";
import { Link, useParams } from "react-router-dom";

const Work = () => {
  let { id } = useParams();
  const works = {
    //fake data

    id: 3,
    work_name: "Sıva İşi",
    work_desc:
      "İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat  ",
    work_start_date: "2024 08 07",
    status: 0,
    work_address: "İstanbuldaki 3 katlı inşaat",
    cost_of_work: 44000,
    amount_to_be_received: 30000,
    amount_received: 14000,
    payments: [
      { id: 1, amount_received: 5000, amount_received_date: "2025-05-06" },
      { id: 2, amount_received: 3000, amount_received_date: "2025-05-15" },
      { id: 3, amount_received: 4000, amount_received_date: "2025-05-28" },
      { id: 4, amount_received: 2000, amount_received_date: "2025-06-08" },
    ],
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
  const alert = () => {
    if (
      confirm(
        "Çalışan İşten Çıkarılacak Emin Misiniz! \nKullanıcın kayıtlarını daha sonrada tekrar görebilirsiniz"
      )
    )
      console.log("silindi");
    else console.log("Vazgeçti");
  };
  return (
    <div>
      <div className=" flex w-[70%] mx-auto p-5 bg-white rounded-3xl justify-center items-center ">
        <div>
          <div>
            <h1 className=" flex text-3xl font-bold text-center justify-center ">
              {works.work_name}
            </h1>
            <span className="flex px-5 pt-2 justify-end">
              <b>İşe Başlangıç Tarihi :&nbsp;</b>
              {works.work_start_date}
            </span>
          </div>
          <div className=" px-4 ">
            <label className=" text-xl font-bold italic ">Açıklama </label>
            <p className="  text-[17px] ">{works.work_desc}</p>
          </div>
          <div className=" flex flex-col  pl-4 items-start ">
            <div>
              <p className=" my-5 font-bold text-xl italic ">
                Çalışan İşçiler ;
              </p>
              <div className="bg-gray-300 p-1 rounded-4xl mx-auto w-full shadow-2xl">
                {workers.map((x, i) => {
                  return (
                    <Link to={`/worker/${x.id}`}>
                      <div className=" flex  justify-start items-center border my-2 py-2 bg-gray-200 border-gray-400 rounded-4xl ">
                        <p className="  m-2 font-bold text-xl ">{i + 1}</p>
                        <img
                          src={x.img}
                          className="  h-[60px]  mx-3 my-1 rounded-full "
                        />
                        <div className="  w-[130px] ">
                          <p
                            className="
                          font-bold
                        "
                          >
                            {x.name + " " + x.surname}
                          </p>
                        </div>
                        <div className=" flex ">
                          <p className=" ml-5 ">
                            <b>Telefon :&nbsp;</b>
                            {x.phone_number}
                          </p>
                          <p className="  ml-5  ">
                            <b>Yevmiye :&nbsp;</b>
                            {x.wage}
                          </p>
                          <p className="  ml-5  ">
                            <b>Başlama Tarihi:&nbsp;</b>
                            {x.registration_date}
                          </p>
                        </div>
                        <div className="  flex  ml-10 justify-center items-center gap-5  ">
                          <Link to={`/days_worked/${x.id}`}>
                            <button className="  flex w-[150px] h-[40px]  text-white  bg-blue-500 rounded-xl shadow-2xl cursor-pointer items-center justify-center hover:bg-blue-600  ">
                              <p className=" font-bold text-center ">
                                Verileri Gör
                              </p>
                            </button>
                          </Link>
                          <Link to={`/days_worked/${x.id}`}>
                            <button
                              onClick={alert}
                              className=" flex w-[150px] h-[40px] text-white font-bold text-center bg-blue-500 rounded-xl shadow-2xl cursor-pointer  items-center justify-center hover:bg-blue-600 mr-2 "
                            >
                              Çalışanı Çıkar
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex h-[60px] w-[60%] my-10 mx-auto bg-gray-300 shadow-2xl rounded-4xl justify-center gap-15 items-center ">
            <p>
              <b>İş Bedeli : &nbsp;</b>
              {works.cost_of_work}
            </p>

            <p>
              <b>Alınacak Tutar : &nbsp;</b>
              {works.amount_to_be_received}
            </p>

            <p>
              <b>Alınan Tutar : &nbsp;</b>
              {works.amount_received}
            </p>
          </div>
          {/* Ödemeler */}
          <div className="flex flex-col p-7 w-[40%] my-10 mx-auto bg-gray-300 shadow-2xl rounded-4xl justify-center gap-15 items-center ">
            {works.payments.map((x, i) => {
              return (
                <p>
                  <b>{i + 1}-&nbsp;&nbsp;</b>
                  <b>Alınan Tutar: &nbsp;</b>
                  {x.amount_received}&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                  <b>Tarih:&nbsp;</b>
                  {x.amount_received_date}
                </p>
              );
            })}
            <button className="flex h-[40px] p-7 text-white bg-gray-600 rounded-xl shadow-2xl items-center justify-center font-bold text-center text-xl hover:bg-blue-600 cursor-pointer">
              Ödeme Ekle
            </button>
          </div>
          <div className="flex w-full mt-15 justify-center gap-25 items-center">
            <Link to={`/update-work/${workers.id}`}>
              <button className="flex h-[70px] p-7 text-white font-bold text-center text-xl bg-blue-500 rounded-xl shadow-2xl items-center justify-center gap-6 hover:bg-blue-600 cursor-pointer">
                İş Bilgilerini Düzenle
              </button>
            </Link>
            <button className="flex h-[70px] p-7  text-white bg-blue-500 font-bold text-center text-xl rounded-xl shadow-2xl items-center justify-center gap-6 hover:bg-blue-600 cursor-pointer">
              İşi Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
