import React from 'react'
import WalletWorkCard from "../components/WalletWorkCard";

const WalletWork = () => {
  const payments = [
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
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1">
      {payments.map((x, i) => {
        return <WalletWorkCard payments={x} key={i} />;
      })}
    </div>
  );
};

export default WalletWork