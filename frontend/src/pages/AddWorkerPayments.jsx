import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { getWorkers, getWorks } from '../Api/Api';
const AddWorkerPayments = () => {
  const blankWork = {
    id: "",
    amount_paid: ""
  };

  const [newWorkPayment, setNewWorkPayment] = useState(blankWork);
  const [workers, setWorkers] = useState([])
  useEffect(() => {
    async function fetchData() {
      const allWorkers = await getWorkers()
      setWorkers(allWorkers?.data)
    }
    fetchData()
  }, [workers])


  return (
    <div className="flex w-full items-center justify-center min-h-[600px]">
      <div className="bg-slate-300 w-[50%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">ÇALIŞANA ÖDEME EKLE</h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newWorkPayment)}</small>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Adı
          </label>
          <select
            className="bg-white h-10 rounded my-2 p-2"
            value={newWorkPayment.id}
            onChange={(e) =>
              setNewWorkPayment({ ...newWorkPayment, id: e.target.value })
            }
          >
            <option value="" default disabled> Çalışanı Seçiniz</option>
            {workers && workers.map((x, i) => {
              return <option value={x.id}>{x.name  + " " + x.surname}</option>;
            })}
          </select>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Ödenen Ücret
          </label>
          <input type="number" className='bg-white h-10 rounded my-2 p-2' value={newWorkPayment.amount_paid} onChange={(e) => setNewWorkPayment({...newWorkPayment,amount_paid:e.target.value})} />
          <div className="mt-5 flex justify-center ">
            <Button variant="contained">EKLE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWorkerPayments