import React, { useState } from "react";
import styled from "styled-components";
import WorkerInput from "../components/WorkerInput";
import Button from "@mui/material/Button";
import { addWorkControl, getWorkers } from "../Api/Api";
import { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const WorkersInput = () => {
  const { employer } = useAuth();
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Aylar 0-11 arası
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [workControls, setWorkControls] = useState([]);
  useEffect(() => {
    if (selectedDate == "") {
      toast.warning("Tarih Boş Bırakılamaz");
      setSelectedDate(getTodayDate());
    }
  }, [selectedDate]);

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

  const handleSubmit = async () => {
    try {
      await Promise.all(workControls.map((control) => addWorkControl(control)));
      setWorkControls([]);
      toast.success("Çalışan Verileri Başarıyla Kaydedildi.");
    } catch (error) {
      console.error(error);
    }
  };
  if (!workers || workers.length === 0) {
    return (
      <>
        <div className="p-4 text-center text-black font-medium">
          Kayıtlı Çalışan Bulunamadı
        </div>
        <div className="flex justify-center  items-center mt-10 gap-2">
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
    <div className="grid sm:grid-cols-2 md:grid-cols-1 gap 5">
      <small>{JSON.stringify(workControls)}</small>
      <p className=" font-bold text-xl m-auto mb-3">Veri Girileceği Zaman</p>
      <input
        type="date"
        max={selectedDate}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="flex items-center justify-center w-70 h-30 m-auto bg-white rounded-4xl text-2xl font-bold mb-3"
      />

      {workers &&
        workers.map((x, i) => {
          return (
            <WorkerInput
              workers={x}
              date={selectedDate}
              onChange={(control) => {
                setWorkControls((prev) => {
                  const others = prev.filter(
                    (c) => c.worker_id !== control.worker_id
                  );
                  return [...others, control];
                });
              }}
            />
          );
        })}
      <div className="flex justify-center items-center ">
        <Button
          onClick={() => handleSubmit()}
          className="h-20 w-50  "
          variant="contained"
        >
          <p className=" font-bold text-xl text-gray-900">KAYDET</p>{" "}
        </Button>
      </div>
    </div>
  );
};
const StyledWrapper = styled.div`
  .input {
    -webkit-appearance: none;
    /* remove default */
    display: block;
    margin: 10px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    vertical-align: middle;
    box-shadow: hsla(0, 0%, 100%, 0.15) 0 1px 1px,
      inset hsla(0, 0%, 0%, 0.5) 0 0 0 1px;
    background-color: hsla(25, 25%, 25%, 0.4);
    background-image: -webkit-radial-gradient(
      hsla(200, 100%, 90%, 1) 0%,
      hsla(200, 100%, 70%, 1) 15%,
      hsla(200, 100%, 60%, 0.3) 50%,
      hsla(200, 100%, 30%, 0) 100%
    );
    background-repeat: no-repeat;
    -webkit-transition: background-position 0.15s cubic-bezier(0.8, 0, 1, 1),
      -webkit-transform 0.25s cubic-bezier(0.8, 0, 1, 1);
    outline: none;
  }

  .input:checked {
    -webkit-transition: background-position 0.2s 0.15s
        cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  .input:active {
    -webkit-transform: scale(1.5);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  }

  /* The up/down direction logic */

  .input,
  .input:active {
    background-position: 0 24px;
  }

  .input:checked {
    background-position: 0 0;
  }

  .input:checked ~ .input,
  .input:checked ~ .input:active {
    background-position: 0 -24px;
  }
`;
export default WorkersInput;
