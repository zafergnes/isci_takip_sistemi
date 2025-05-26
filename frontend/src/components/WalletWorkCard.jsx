import React from 'react'
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
const WalletWorkCard = ({ payments }) => {
  return (
    <div className="mx-auto p-5  ">
      <Link to={`/work/${payments.id}`}>
        <div className="flex flex-wrap items-center bg-white shadow-md rounded-xl m-3 w-[1300px] h-[150px] p-5">
          <h2 className="mt-1 text-xl text-center font-bold">
            {payments.work_name}
          </h2>
          <div className="flex  flex-wrap justify-center items-center m-auto">
            <div className="flex  mx-auto ">
              <b className="ml-5">İş Adresi :&nbsp; </b>
              {payments.address}
              <b className="ml-5">Alınan Tutar : &nbsp;</b>
              {payments.total_amount_received}
              <b className="ml-5">Alınacak Tutar: &nbsp;</b>
              {(payments && payments.cost_of_work) -
                (payments && payments.total_amount_received)}
              <b className="ml-5">İş Bedeli: &nbsp;</b>
              {payments.cost_of_work}
            </div>
          </div>
          <div className=" flex m-4 ml-15 items-end  gap-3">
            <Button className="" variant="contained">
              <Link to={`/work/${payments.id}`}>VERİLERİ GÖR</Link>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WalletWorkCard