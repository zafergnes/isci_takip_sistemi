import React from 'react'
import { Link } from 'react-router-dom'

const Workcard = ({ works }) => {
  let status = "";
  switch (works.status) {
    case 0:
      status = "Başlanmadı";
      break;
    case 1:
      status = "Devam Ediyor";
      break;
    case 2:
      status = "Bitti";
      break;
    default:
      status = "Belirtilmedi";
  }
  const workers = [
    { id: 1, text: "Ali Topal" },
    { id: 2, text: "Yusuf Gunes" },
    { id: 3, text: "Mehmet Öztürk" },
    { id: 4, text: "Savas Kara" },
    { id: 5, text: "Alaattin Polat" },
  ];

  return (
    <div className="bg-white shadow-md overflow-hidden rounded-xl">
      <Link to={`/work/${works.id}`}>
        <div className="flex flex-col w-full p-5">
          <div className="">
            <h2 className="m-3 text-3xl text-center font-bold ">
              {" "}
              {works.work_name}
            </h2>
          </div>
          <div className="flex">
            <p className="flex justify-center items-center opacity-50 font-bold m-2">
              {works.work_desc}
            </p>
          </div>
          <div className="p-2">
            <p className="font-bold">Çalışan İşçiler</p>
            {workers.map((x, i) => {
              return (
                <p>
                  {x.id} - {x.text}
                </p>
              );
            })}
            <div className="mt-5">
              <b>İş durumu :</b>
              {status}
            </div>
            <div className="m-3">
              <p className="text-right">{works.work_start_date}</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 w-full py-1 bg-blue-500  cursor-pointer text-white rounded hover:bg-blue-600">
              <p className="font-bold text-center text-[17px]">İŞİ DÜZENLE </p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Workcard