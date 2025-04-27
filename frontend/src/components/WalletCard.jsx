import React from 'react'

const WalletCard = ({ payments }) => {
  return (
    <div className="flex justify-center  items-center w-[60%]">
      <div></div>
      <p>Çalışan id : {payments.worker_id}</p>
      <p>Ödenen Tutar: {payments.amount_paid}</p>
      <p>Ödeme Zamanı: {payments.amount_paid_time}</p>
      <p>Ödenecek Tutar : {payments.amount_to_be_paid}</p>
      <p>Durum :{payments.status}</p>
    </div>
  );
};

export default WalletCard