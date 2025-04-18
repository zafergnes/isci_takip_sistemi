import React, { useState } from 'react'
import Button from '@mui/material/Button';
const CreateWork = () => {
  const blankWork = {
    "work_name":"",
    "work_desc":"",
    "work_status":""
  }
  const [newWork,setNewWork] = useState(blankWork);
  const status = [
    {text:'Başlanmadı',path:'/'},
    {text:'Devam Ediyor',path:'/' },
    {text:'Bitti',path:'/' }
  ]
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[60%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">İŞ EKLE</h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newWork)}</small>
          <label htmlFor="" className="ml-1 text-gray-500">
            İş Adı
          </label>
          <input
            type="text"
            className="bg-white h-10 border border-gray-300 rounded my-2 p-2"
            value={newWork.work_name}
            onChange={(e) =>
              setNewWork({ ...newWork, work_name: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-gray-500">
            İş Açıklama
          </label>

          <textarea
            type="text"
            className="bg-white  border h-[100px]  border-gray-300 rounded my-2 p-2"
            value={newWork.work_desc}
            onChange={(e) =>
              setNewWork({ ...newWork, work_desc: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-gray-500">
            İş durumu
          </label>
          <select
            className="bg-white rounded h-10 my-2 p-2"
            value={newWork.work_status}
            onChange={(e) => setNewWork({ ...newWork, status: e.target.value })}
          >
            <option value="" default disabled>
             İş Durumu Seç 
            </option>
            {status.map((x) => {
              return <option value={x.text}>{x.text}</option>;
            })}
          </select>
          <div className="mt-5 justify-end ">
            <Button variant="contained">EKLE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWork