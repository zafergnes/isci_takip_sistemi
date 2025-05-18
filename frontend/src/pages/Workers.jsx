import React, { useEffect, useState } from "react";
import WorkerCard from "../components/WorkerCard";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getWorkers } from "../Api/Api";
import { useAuth } from "../context/AuthContext";

const Workers = () => {
  const { employer } = useAuth();
  const [workers, setWorkers] = useState(null);
  useEffect(() => {
    async function fetchData() {
      if (employer) {
        const allWorkers = await getWorkers(employer);
        setWorkers(allWorkers.data);
      }
    }
    fetchData();
  }, [employer]);

  if (!workers || workers.length === 0) {
    return (
      <>
        <div className="p-4 text-center text-gray-600 font-medium">
          Kayıtlı Çalışan Bulunamadı
        </div>
        <div className="flex justify-center  items-center mt-3 gap-2">
          <Link to={"/add-worker"}>
            <button className="flex items-center justify-center w-[340px] gap-6 h-[70px] px-3  border-4  border-gray-700 py-1 bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
              <IoAddSharp className="  w-[40px] h-[40px]  " />
              <p className="font-bold text-center text-[25px]">ÇALIŞAN EKLE </p>
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto w-[80%] ">
        {workers &&
          workers.map((x, i) => {
            return <WorkerCard key={i} workers={x} />;
          })}
      </div>
      <div className="flex justify-center  items-center mt-3 gap-2">
        <Link to={"/add-worker"}>
          <button className="flex items-center justify-center w-[340px] gap-6 h-[70px] px-3  border-4  border-gray-700 py-1 bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
            <IoAddSharp className="  w-[40px] h-[40px]  " />
            <p className="font-bold text-center text-[25px]">ÇALIŞAN EKLE </p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Workers;
