import React from 'react'
import { useParams } from 'react-router-dom'
import Calendar from "../components/Calendar";
import WorkerData from "../components/WorkerData";

const WalletWorkerData = () => {
  // ! farklı tablolardan çekilecek veriler
  const payments = [
    {
      id: 1,
      worker_id: 2,
      worker_work_id: 3,
      worker_name: "Ali",
      worker_surname: "Topal",
      worker_img: "https://i.pravatar.cc/310 ",
      worker_wage: 2500,
      worker_registration_date: "2024-03-05",
      worker_phone_number: "0542 234 2132",
      worker_email: "alitopal@gmail.com",
      amount_paid: 20000,
      amount_pait_time: "2025,05,06",
      amount_to_be_paid: 25000,
      debt: 5000,
      status: 1,
      worked_days: [
        "2021-03-05",
        "2025-03-05",
        "2025-03-06",
        "2025-03-11",
        "2025-03-11",
        "2025-03-11",
        "2025-03-07",
        "2025-03-12",
        "2025-03-13",
        "2025-03-14",
        "2025-03-15",
        "2025-03-17",
        "2025-03-17",
        "2025-03-19",
        "2025-03-20",
        "2025-03-21",
        "2025-03-24",
        "2025-03-25",
        "2025-04-26",
        "2025-04-28",
        "2025-04-29",
        "2025-04-05",
        "2025-04-06",
        "2025-04-07",
        "2025-04-11",
        "2025-04-12",
        "2025-04-13",
        "2025-04-14",
        "2025-04-15",
        "2025-04-17",
        "2025-04-17",
        "2025-04-19",
        "2025-04-20",
        "2025-04-21",
        "2025-04-24",
        "2025-04-25",
        "2025-04-26",
        "2025-04-28",
        "2025-04-29",
        "2025-05-05",
        "2025-05-06",
        "2025-05-07",
        "2025-05-11",
        "2025-05-12",
        "2025-05-13",
        "2025-05-14",
        "2025-05-15",
        "2025-05-17",
        "2025-05-17",
        "2025-05-19",
        "2025-05-20",
        "2025-05-21",
        "2025-05-24",
        "2025-05-25",
        "2025-05-26",
        "2025-05-28",
        "2025-05-29",
      ],
      payments: [
        {
          id: 1,
          worker_id: 2,
          amount_paid: 2500,
          amount_paid_time: "2024-05-07",
        },
        {
          id: 2,
          worker_id: 2,
          amount_paid: 7500,
          amount_paid_time: "2024-05-07",
        },
        {
          id: 3,
          worker_id: 2,
          amount_paid: 10000,
          amount_paid_time: "2024-05-07",
        },
      ],
    },
  ];
  let { id } = useParams();
  return (
    /*
       Çalışanın Tüm Çalıştığı Günler Hakıında Bilgiler Öncelik Son 3 ay
       Çalışanın Aldığı Tüm Ödemeler ve Tarihleri
    */
    <div>
      {payments.map((x, i) => {
        return <WorkerData payments={x} key={i} />;
      })}
    </div>
  );
};

export default WalletWorkerData