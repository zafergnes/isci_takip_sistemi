import React, { useEffect, useState } from 'react'
import WalletWorkerCard from "../components/WalletWorkerCard";
import { getWalletWorkerData, getWorkers } from '../Api/Api';
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";

const WalletWorker = () => {
  const { employer } = useAuth();
  const [workers, setWorkers] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const allWorkers = await getWalletWorkerData(employer);
      setWorkers(allWorkers?.data);
    }
    fetchData();
  }, [employer]);

  if (!workers || workers.length === 0) {
    return (
      <>
        <div className="p-4 text-center text-gray-600 font-medium">
          Kayıtlı Çalışan Bulunamadı
        </div>
        <div className="flex justify-center  items-center mt-3 gap-2">
          <Link to={"/add-worker"}>
            <button className="flex items-center justify-center w-[340px] gap-6 h-[70px] px-3  border-4  border-gray-700 py-1 bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
              <IoAddSharp className="  w-[40px] h-[40px]  " />
              <p className="font-bold text-center text-[25px]">ÇALIŞAN EKLE </p>
            </button>
          </Link>
        </div>
      </>
    );
  }
  const worker = [
    // ? farklı tablolardan çekilecek veriler
    {
      worker_id: 1,
      worker_name: "Veli",
      worker_surname: "Kara",
      worker_img: "",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
      workedDays: [
        "2025-05-09",
        "2025-05-10",
        "2025-05-11",
        "2025-05-12",
        "2025-05-13",
        "2025-05-15",
      ],
    },
  ];
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 min-w-[1000px]">
      {workers &&
        workers.map((x, i) => {
          return <WalletWorkerCard key={i} workers={x} />;
        })}
    </div>
  );
};
export default WalletWorker