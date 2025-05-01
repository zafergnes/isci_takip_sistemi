import React from 'react'
import { useParams } from 'react-router-dom'
import Calendar from "../components/Calendar";

const WalletWorkerData = () => {
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
        "2025-05-09",
        "2025-05-10",
        "2025-05-11",
        "2025-05-12",
        "2025-05-13",
        "2025-05-15",
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
        "2025-05-05",
        "2025-05-06",
        "2025-05-07",
        "2025-05-11",
        "2025-05-12",
        "2025-05-13",
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
        "2025-05-15",
        "2025-05-18",
        "2025-05-21",
        "2025-05-23",
        "2025-05-28",
        "2025-05-29",
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
        "2025-05-15",
        "2025-05-16",
        "2025-05-17",
        "2025-05-21",
        "2025-05-22",
        "2025-05-23",
        "2025-04-15",
        "2025-04-16",
        "2025-04-17",
        "2025-04-21",
        "2025-04-22",
        "2025-04-23",
        "2025-04-15",
        "2025-03-16",
        "2025-03-17",
        "2025-03-21",
        "2025-03-22",
        "2025-03-23",
      ],
    },
  ];
  let { id } = useParams();
  return <div>wallet worker data id {id}</div>;
};

export default WalletWorkerData