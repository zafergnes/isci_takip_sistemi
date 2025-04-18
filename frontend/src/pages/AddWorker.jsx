import React from 'react'
import Button from "@mui/material/Button";

const AddWorker = () => {
  const works = [
    { id: 1, work_name: "Kalıp İşi" },
    { id: 2, work_name: "Sıva İşi" },
    { id: 3, work_name: "Alçı İşi" },
    { id: 4, work_name: "Demir İşi" },
  ];
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[60%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">ÇALIŞAN EKLE</h1>
        <div className="flex flex-col">
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Adı
          </label>
          <input
            type="text"
            className="bg-white w-full mt-3 h-10 border border-gray-300 rounded my-2 p-2"
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Soyadı
          </label>
          <input
            type="text"
            className="bg-white w-full mt-3 h-10 border border-gray-300 rounded my-2 p-2"
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Telefon Numarası
          </label>
          <input
            type="phone"
            className="bg-white w-full mt-3 border border-gray-300 h-10 rounded my-2 p-2"
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            E-Mail Adresi
          </label>
          <input
            type="mail"
            className="bg-white w-full mt-3 border border-gray-300 h-10 rounded my-2 p-2"
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışacağı İş
          </label>
          <select className="bg-white rounded h-10 my-2 p-2">
            <option value="" default disabled>
              İş Seç
            </option>
            {works.map((x) => {
              return <option>{x.work_name}</option>;
            })}
          </select>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Yevmiye Ücreti
          </label>
          <input
            type="number"
            className="bg-white w-full mt-3 border border-gray-300 rounded h-10 my-2 p-2"
          />
          <div className=" flex mt-5 justify-end ">
            <Button variant="contained" className="w-full h-15">
              <p className="text-xl">EKLE</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorker