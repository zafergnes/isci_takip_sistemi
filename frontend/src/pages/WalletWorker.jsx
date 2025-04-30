import React from 'react'
import WalletWorkerCard from "../components/WalletWorkerCard";

const WalletWorker = () => {
  const payments = [
    // ? farklı tablolardan çekilecek veriler
    {
      worker_id: 1,
      worker_name: "Veli",
      worker_surname: "Kara",
      worker_img: "https://i.pravatar.cc/308",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
      workedDays: [
        "2025-04-09",
        "2025-04-10",
        "2025-04-11",
        "2025-04-12",
        "2025-04-13",
        "2025-04-15",
      ],
    },
    {
      worker_id: 2,
      worker_name: "Ali",
      worker_surname: "Topal",
      worker_img: "https://i.pravatar.cc/310 ",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
      workedDays: [
        "2025-04-05",
        "2025-04-06",
        "2025-04-07",
        "2025-04-11",
        "2025-04-12",
        "2025-04-13",
      ],
    },
    {
      worker_id: 3,
      worker_name: "Erdem",
      worker_surname: "Bulat",
      worker_img: "https://i.pravatar.cc/304",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
      workedDays: [
        "2025-04-15",
        "2025-04-18",
        "2025-04-21",
        "2025-04-23",
        "2025-04-28",
        "2025-04-29",
      ],
    },
    {
      worker_id: 4,
      worker_name: "Devran",
      worker_surname: "Karahan",
      worker_img: "https://i.pravatar.cc/305",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
      workedDays: [
        "2025-04-15",
        "2025-04-16",
        "2025-04-17",
        "2025-04-21",
        "2025-04-22",
        "2025-04-23",
      ],
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1">
      {payments.map((x, i) => {
        return <WalletWorkerCard key={i} payments={x} />;
      })}
    </div>
  );
};
export default WalletWorker