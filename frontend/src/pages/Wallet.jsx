import React from 'react'
import WalletCard from '../components/WalletCard'

const Wallet = () => {
  const payments = [
    {
      id: 1,
      worker_id: 1,
      amount_paid: 10000,
      amount_paid_time: "2024-05-03",
      amount_to_be_paid: 5000,
      status: 0,
    },
    {
      id: 2,
      worker_id: 1,
      amount_paid: 10000,
      amount_paid_time: "2024-05-03",
      amount_to_be_paid: 5000,
      status: 0,
    },
    {
      id: 3,
      worker_id: 1,
      amount_paid: 10000,
      amount_paid_time: "2024-05-03",
      amount_to_be_paid: 5000,
      status: 0,
    },
    {
      id: 4,
      worker_id: 1,
      amount_paid: 10000,
      amount_paid_time: "2024-05-03",
      amount_to_be_paid: 5000,
      status: 0,
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1 gap 5">
      {payments.map((x) => {
        return <WalletCard payments={x} />;
      })}
    </div>
  );
}

export default Wallet