import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Calendar from './Calendar';



const WalletWorkerCard = ({ workers }) => {

  return (
    <>
      <div className="mx-auto p-5  ">
        <div className="flex flex-wrap items-center bg-white shadow-md rounded-xl m-3 w-[1300px] h-[400px] p-5">
          <div className="flex  flex-wrap justify-center items-center m-auto">
            <Link
              className=" m-auto"
              to={`/wallet-worker-data/${workers.id}`}
            >
              <img
                className="mx-auto h-[70px] rounded-full"

              />
              <h2 className="mt-1 text-xl text-center font-bold">
                {workers.name + "  " + workers.surname}
              </h2>
            </Link>
            <div className="flex justify-between mx-auto ">
              <b className="ml-5">Çalıştığını Gün Sayısı :&nbsp; </b>
              {workers.days_worked}
              <b className="ml-5">Ödenen Tutar : &nbsp;</b>
              {workers.amount_paid}
              <b className="ml-5">Ödenecek Tutar : &nbsp;</b>
              {(workers.wage) * (workers.days_worked) - (workers.amount_paid)}

            </div>
            <div className="flex m-4 justify-center items-center gap-3">
              <Link to={`/wallet-worker-data/${workers.id}`}>
                <Button className="" variant="contained">
                  VERİLERİ GÖR
                </Button>
              </Link>

            </div>
            <div className="flex flex-wrap mx-auto mt-8 justify-center items-center bg-gray-100 rounded-2xl h-[200px] p-3">
              <p className="flex items-center justify-center bg-white shadow-md w-[200px] m-auto rounded-3xl">
                Bu Ay Çalışma Durumu
              </p>
              <div className="flex items-center bg-white shadow-md rounded-xl m-3 w-[1100px] h-[100px] p-5">
                <div className="flex justify-between items-center m-auto">
                  <Calendar workeddays={workers.workeddays} />

                </div>
              </div>
            </div>
          </div>

          {/* Button örneği */}
          {/* <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Ücret Öde
            </button>
            <button className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">
              Verileri Gör
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WalletWorkerCard;