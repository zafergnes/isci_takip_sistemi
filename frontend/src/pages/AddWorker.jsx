import React, { useState } from "react";
import Button from "@mui/material/Button";

const AddWorker = () => {
  const blankWorker = {
    name: "",
    surname: "",
    phone_number: "",
    e_mail: "",
    wage: "",
  };
  const [newWorker, setNewWorker] = useState(blankWorker);
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[40%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">ÇALIŞAN EKLE</h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newWorker)}</small>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Adı
          </label>
          <input
            type="text"
            required
            className="bg-white w-full mt-3 h-10 border border-gray-300 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, name: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Soyadı
          </label>
          <input
            type="text"
            className="bg-white w-full mt-3 h-10 border border-gray-300 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, surname: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Telefon Numarası
          </label>
          <input
            type="tel"
            placeholder="Örn. 512 345 6789"
            className="bg-white w-full mt-3 border border-gray-300 h-10 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, phone_number: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            E-Mail Adresi
          </label>
          <input
            type="mail"
            className="bg-white w-full mt-3 border border-gray-300 h-10 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, e_mail: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Yevmiye Ücreti
          </label>
          <input
            type="number"
            className="bg-white w-full mt-3 border border-gray-300 rounded h-10 my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, wage: e.target.value })
            }
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

export default AddWorker;
