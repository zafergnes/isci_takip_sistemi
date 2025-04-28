import React from 'react'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const WalletCard = ({ payments }) => {
  return (
    <>
      <div className="flex justify-center mx-auto p-5">
        <div className="flex items-center bg-white shadow-md rounded-xl m-3 w-[1100px] h-[150px] p-5">
          <Link className=" m-auto" to={`/days_worked/${payments.worker_id}`}>
            <img
              className="mx-auto h-[70px] rounded-full"
              src={payments.worker_img}
            />
            <h2 className="mt-1 text-xl text-center font-bold">
              {payments.worker_name + "  " + payments.worker_surname}
            </h2>
          </Link>
          <div className="flex justify-between mx-auto ">
            <b className="ml-5">Çalıştığını Gün Sayısı :&nbsp; </b>
            {payments.days_worked}
            <b className="ml-5">Ödenen Tutar : &nbsp;</b>
            {payments.amount_paid}
            <b className="ml-5">Ödenecek Tutar : &nbsp;</b>
            {payments.amount_to_be_paid}
          </div>
          <div className="flex m-4 justify-center items-center gap-3">
            <Button
              onClick={() => {
                alert("Tıklandı");
              }}
              className=""
              variant="contained"
            >
              Ücret Öde
            </Button>
            <Button
              onClick={() => {
                alert("Tıklandı");
              }}
              className=""
              variant="contained"
            >
              VERİLERİ GÖR
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletCard