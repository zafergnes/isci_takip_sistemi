import React from 'react'
import WalletCard from '../components/WalletCard'

const Wallet = () => {
  
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
    },
    {
      worker_id: 2,
      worker_name: "Ali",
      worker_surname: "Topal",
      worker_img: "https://i.pravatar.cc/310 ",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
    },
    {
      worker_id: 3,
      worker_name: "Erdem",
      worker_surname: "Bulat",
      worker_img: "https://i.pravatar.cc/304",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
    },
    {
      worker_id: 4,
      worker_name: "Devran",
      worker_surname: "Karahan",
      worker_img: "https://i.pravatar.cc/305",
      amount_paid: 15000,
      amount_to_be_paid: 20000,
      days_worked: 15,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1">
      {payments.map((x) => {
        return <WalletCard payments={x} />;
      })}
    </div>
  );
}

export default Wallet