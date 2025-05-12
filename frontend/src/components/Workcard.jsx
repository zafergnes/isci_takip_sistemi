import React from 'react'
import { Link } from 'react-router-dom'

const Workcard = ({ works }) => {

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
          <div className="flex h-[100px]">
            <p className="flex justify-center items-center opacity-50 font-bold m-2">
              {works.work_desc}
            </p>
          </div>
          <div className="flex m-2 mt-5">
            <b className="flex justify-center items-center font-bold ">
              İş Adresi : &nbsp;
            </b>{" "}
            {works.address}
            <p className="flex justify-center items-center opacity-50 font-bold "></p>
          </div>
          <div className="p-2">
            {/* <p className="font-bold">Çalışan İşçiler</p>
            {workers.map((x, i) => {
              return (
                <p>
                  {x.id} - {x.text}
                </p>
              );
            })} */}

            <div className="m-3">
              <p className="text-right">{works.date}</p>
            </div>
          </div>
          <div className=''>
            <Link to={`/update-work/${works.id}`}>
              <button className="px-3 w-full  py-1 bg-blue-500 m-2 cursor-pointer text-white rounded hover:bg-blue-600">
                <p className="font-bold text-center text-[17px] p-1">
                  İŞ BİLGİLERİNİ DÜZENLE
                </p>
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Workcard