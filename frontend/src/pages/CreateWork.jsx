import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { createWork } from "../Api/Api";
import { useAuth } from "../context/AuthContext";
const CreateWork = () => {
  const { employer } = useAuth();
  const blankWork = {
    employer_id: employer?.id,
    work_name: "",
    work_desc: "",
    cost_of_work: "",
    address: "",
  };
  const [newWork, setNewWork] = useState(blankWork);

  const handleSubmit = async () => {
    try {
      let createdWork = await createWork(newWork);
      if (createdWork.desc == 1) {
        setNewWork(blankWork);
        alert("İş Oluşturuldu");
      }
    } catch (error) {
      console.log(error);
      alert("iş oluşturulamadı");
    }
  };
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[60%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">İŞ EKLE</h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newWork)}</small>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş Adı
          </label>
          <input
            type="text"
            required
            className="bg-white h-10 border border-gray-300 rounded my-2 p-2"
            value={newWork.work_name}
            onChange={(e) =>
              setNewWork({ ...newWork, work_name: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş Açıklama
          </label>

          <textarea
            type="text"
            placeholder=" Doldurulması İsteğe Bağlıdır."
            className="bg-white  border h-[100px]  border-gray-300 rounded my-2 p-2"
            value={newWork.work_desc}
            onChange={(e) =>
              setNewWork({ ...newWork, work_desc: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş Adresi
          </label>
          <input
            type="text"
            required
            className="bg-white h-10 border border-gray-300 rounded my-2 p-2"
            value={newWork.address}
            onChange={(e) =>
              setNewWork({ ...newWork, address: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş Bedeli
          </label>
          <input
            type="number"
            required
            className="bg-white h-10 border border-gray-300 rounded my-2 p-2"
            value={newWork.cost_of_work}
            onChange={(e) =>
              setNewWork({ ...newWork, cost_of_work: e.target.value })
            }
          />
          <div className="mt-5 justify-end ">
            <Button onClick={() => handleSubmit()} variant="contained">
              EKLE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWork