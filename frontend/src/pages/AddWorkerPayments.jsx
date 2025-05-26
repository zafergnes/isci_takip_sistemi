import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { addWorkerPayment, getWorkers, getWorks } from "../Api/Api";
import { useAuth } from "../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const AddWorkerPayments = () => {
  const navigate = useNavigate();
  const { employer } = useAuth();
  const blankWorker = {
    worker_id: "",
    amount_paid: "",
    employer_id: employer?.id,
  };

  const [newWorkerPayment, setNewWorkerPayment] = useState(blankWorker);
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const allWorkers = await getWorkers(employer);
      setWorkers(allWorkers?.data);
    }
    fetchData();
  }, [employer]);

  const handleUpload = async () => {
    try {
      if (
        newWorkerPayment.amount_paid != "" &&
        newWorkerPayment.worker_id != ""
      ) {
        let addedWorkerPayment = await addWorkerPayment(newWorkerPayment);
        if (addedWorkerPayment.length != 0) {
          setNewWorkerPayment(blankWorker);
          toast.success("Ödeme Başarıyla eklendi.");
          navigate(`/wallet-worker-data/${newWorkerPayment.worker_id}`);
        }
      } else {
        toast.warning("Alanlar Boş Bırakılamaz. !");
      }
    } catch (error) {
      console.error(error);
      console.log("Ödeme Eklenirken Bir Hata Oluştu.");
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-[600px]">
      <div className="bg-slate-300 w-[50%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">ÇALIŞANA ÖDEME EKLE</h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newWorkerPayment)}</small>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Seçiniz
          </label>
          <select
            className="bg-white h-10 rounded my-2 p-2"
            value={newWorkerPayment.worker_id}
            onChange={(e) =>
              setNewWorkerPayment({
                ...newWorkerPayment,
                worker_id: e.target.value,
              })
            }
          >
            <option value="" default disabled>
              Çalışanı Seçiniz
            </option>
            {workers &&
              workers.map((x, i) => {
                return (
                  <option key={i} value={x.id}>
                    {x.name + " " + x.surname}
                  </option>
                );
              })}
          </select>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Ödenen Ücret
          </label>
          <input
            type="number"
            min="0"
            step="500"
            className="bg-white h-10 rounded my-2 p-2"
            value={newWorkerPayment.amount_paid}
            onChange={(e) =>
              setNewWorkerPayment({
                ...newWorkerPayment,
                amount_paid: e.target.value,
              })
            }
          />
          <div className="mt-5 flex justify-center ">
            <Button variant="contained" onClick={() => handleUpload()}>
              EKLE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorkerPayments