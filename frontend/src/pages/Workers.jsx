import React, { useEffect, useState } from "react";
import WorkerCard from "../components/WorkerCard";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getWorkers } from "../Api/Api";

const Workers = () => {
  const [workers, setWorkers] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const allWorkers = await getWorkers();
      setWorkers(allWorkers.data);
    }
    fetchData();
  }, []);
  const workerss = [
    //fake data
    {
      id: 1,
      name: "Ali",
      surname: "Topal",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/301",
      wage: 2300,
    },
    {
      id: 2,
      name: "Yusuf",
      surname: "Boncuk",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/302",
      wage: 2700,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Şimşek",
      phone_number: "0542 234 2132",
      work_id: 2,
      img: "https://i.pravatar.cc/303",
      wage: 2500,
    },
    {
      id: 4,
      name: "Mert",
      surname: "Bayram",
      phone_number: "0542 234 2132",
      work_id: 1,
      img: "https://i.pravatar.cc/304",
      wage: 2000,
    },
    {
      id: 5,
      name: "Ali",
      surname: "Topal",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/305",
      wage: 2300,
    },
    {
      id: 6,
      name: "Yusuf",
      surname: "Boncuk",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/306",
      wage: 2700,
    },
    {
      id: 7,
      name: "Mehmet",
      surname: "Şimşek",
      phone_number: "0542 234 2132",
      work_id: 2,
      img: "https://i.pravatar.cc/307",
      wage: 2500,
    },
    {
      id: 8,
      name: "Mert",
      surname: "Bayram",
      phone_number: "0542 234 2132",
      work_id: 1,
      img: "https://i.pravatar.cc/308",
      wage: 2000,
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto w-[80%] ">
        {workers &&
          workers.map((x) => {
            return <WorkerCard workers={x} />;
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
