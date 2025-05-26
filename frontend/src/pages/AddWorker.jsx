import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useAuth } from "../Context/AuthContext";
import { addWorker, getWorks, uploadFile } from "../Api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddWorker = () => {
  const { employer } = useAuth();
  const navigate = useNavigate();
  const blankWorker = {
    name: "",
    surname: "",
    phone_number: "",
    mail: "",
    work_id: "",
    wage: "",
    image: "uploads/default.png",
    employer_id: employer?.id,
  };
  const [works, setWorks] = useState([]);
  const [newWorker, setNewWorker] = useState(blankWorker);

  useEffect(() => {
    async function fetchData() {
      const allWorks = await getWorks(employer);
      setWorks(allWorks?.data);
    }
    fetchData();
  }, [employer]);
  const handleSubmit = async () => {
    try {
      if (
        (newWorker.name != "" &&
          newWorker.surname != "" &&
          newWorker.phone_number != "" &&
          newWorker.mail != "" &&
          newWorker.wage != "",
        newWorker.work_id != "")
      ) {
        let addedWorker = await addWorker(newWorker);
        if (addedWorker.desc == 1) {
          setNewWorker(blankWorker);
          toast.success("Çalışan Eklendi.");
          navigate("/workers");
        }
      } else {
        toast.warning("Alanlar Boş Bırakılamaz!");
      }
    } catch (error) {
      console.log(error);
      toast.warning("Çalışan Eklenirken Bir Hata Oluştu.");
    }
  };
  const handleUpload = async (event) => {
    console.log(event);
    let uploadedFile = await uploadFile(event.target.files[0]);
    if (uploadedFile.path) {
      console.log(uploadedFile.path);
      setNewWorker({ ...newWorker, image: uploadedFile.path });
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[40%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">ÇALIŞAN EKLE</h1>
        <div className="flex flex-col">
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Adı
          </label>
          <input
            type="text"
            required
            className="bg-white w-full mt-3 h-10 border border-gray-300 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, name: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Soyadı
          </label>
          <input
            type="text"
            className="bg-white w-full mt-3 h-10 border border-gray-300 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, surname: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Telefon Numarası
          </label>
          <input
            type="tel"
            placeholder="Örn. 512 345 6789"
            className="bg-white w-full mt-3 border border-gray-300 h-10 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, phone_number: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            E-Mail Adresi
          </label>
          <input
            type="mail"
            className="bg-white w-full mt-3 border border-gray-300 h-10 rounded my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, mail: e.target.value })
            }
          />

          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışacağı İş
          </label>
          <select
            className="bg-white h-10 rounded my-2 p-2"
            value={newWorker.work_id}
            onChange={(e) =>
              setNewWorker({ ...newWorker, work_id: e.target.value })
            }
          >
            <option value={""} default disabled>
              İşi Seçiniz
            </option>
            <option value={0}>Şuan İş'i Olmayacak</option>
            {Array.isArray(works) &&
              works.map((x, i) => {
                return (
                  <option key={i} value={x.id}>
                    {x.work_name}
                  </option>
                );
              })}
          </select>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Yevmiye Ücreti
          </label>
          <input
            type="number"
            min="0"
            step="500"
            className="bg-white w-full mt-3 border border-gray-300 rounded h-10 my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, wage: e.target.value })
            }
          />
          <label
            htmlFor=""
            className="ml-1 mt-3 flex justify-center text-xl text-gray-700"
          >
            Fotoğraf
          </label>
          <input
            type="file"
            onChange={(e) => handleUpload(e)}
            className="bg-white w-[300px] mx-auto border-2  cursor-pointer border-gray-500 rounded my-2 p-3"
          />
          <div className=" flex mt-5 justify-end ">
            <Button
              variant="contained"
              className="w-full h-15"
              onClick={() => handleSubmit()}
            >
              <p className="text-xl">EKLE</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorker;
