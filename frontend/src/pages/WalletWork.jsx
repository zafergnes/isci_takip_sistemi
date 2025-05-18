import React from 'react'
import WalletWorkCard from "../components/WalletWorkCard";
import { getWalletWorks } from '../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";

const WalletWork = () => {
  const { employer } = useAuth();
  const [payments, setPayments] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const allWorksData = await getWalletWorks(employer);
      setPayments(allWorksData.data);
    }
    fetchData();
  }, [employer]);
  const payment = [
    {
      id: 1,
      work_id: 1,
      work_name: "Kalıp İşi",
      work_addres: "Ölüdeniz Mahallesi",
      date: "2025-04-15",
      to_be_taken: 100000,
      received: 500000,
    },
    {
      id: 2,
      work_id: 2,
      work_name: "Sıva İşi",
      work_addres: "Çiftlik Mahallesi",
      date: "2025-04-15",
      to_be_taken: 100000,
      received: 500000,
    },
    {
      id: 3,
      work_id: 3,
      work_name: "Perde Duvar İşi",
      work_addres: "Nurhak",
      date: "2025-04-15",
      to_be_taken: 100000,
      received: 500000,
    },
    {
      id: 4,
      work_id: 4,
      work_name: "Tadilat İşi",
      work_addres: "Karamürsel",
      date: "2025-04-15",
      to_be_taken: 100000,
      received: 500000,
    },
    {
      id: 5,
      work_id: 5,
      work_name: "Demir İşi",
      work_addres: "Esentepe Mahallesi",
      date: "2025-04-15",
      to_be_taken: 100000,
      received: 500000,
    },
  ];
  if (!payments || payments.length === 0) {
    return (
      <>
        <div className="p-4 text-center text-black font-medium">
          Kayıtlı İş Bulunamadı
        </div>
        <div className="flex justify-center  items-center mt-10 gap-2">
          <Link to={"/create-work"}>
            <button className="flex items-center justify-center w-[340px] gap-6 h-[70px] px-3  border-4  border-gray-700 py-1 bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
              <IoAddSharp className="  w-[40px] h-[40px]  " />
              <p className="font-bold text-center text-[25px]">İŞ EKLE </p>
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1">
      {payments &&
        payments.map((x, i) => {
          return <WalletWorkCard payments={x} key={i} />;
        })}
    </div>
  );
};

export default WalletWork