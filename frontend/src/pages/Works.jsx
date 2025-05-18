import React, { useEffect, useState } from "react";
import Workcard from "../components/Workcard";
import { Link } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import { getWorks } from "../Api/Api";
import { useAuth } from "../context/AuthContext";

const Works = () => {
  const { employer } = useAuth();
  const [works, setWorks] = useState(null);

  useEffect(() => {
    if (employer) {
      getWorks(employer).then((data) => setWorks(data.data));
    }
  }, [employer]);

  useEffect(() => {
    async function fetchData() {
      const allWorks = await getWorks(employer);
      setWorks(allWorks.data);
    }
    fetchData();
  }, []);

  if (!works || works.length === 0) {
    return (
      <>
        <div className="p-4 text-center text-black font-medium">
          Kayıtlı İş Bulunamadı
        </div>
        <div className="flex justify-center  items-center mt-10 gap-2">
          <Link to={"/create-work"}>
            <button className="flex items-center justify-center w-[340px] gap-6 h-[70px] px-3  border-4  border-gray-700 py-1 bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
              <IoAddSharp className="  w-[40px] h-[40px]  " />
              <p className="font-bold text-center text-[25px]">İŞ EKLE </p>
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 m-auto w-[70%] ">
        {works &&
          works.map((x, i) => {
            return <Workcard key={i} works={x} />;
          })}
      </div>
      <div className="flex justify-center  items-center mt-10 gap-2">
        <Link to={"/create-work"}>
          <button className="flex items-center justify-center w-[340px] gap-6 h-[70px] px-3  border-4  border-gray-700 py-1 bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
            <IoAddSharp className="  w-[40px] h-[40px]  " />
            <p className="font-bold text-center text-[25px]">İŞ EKLE </p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Works;
