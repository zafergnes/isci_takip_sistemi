import React , {useEffect, useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  getWorkByWorkerId,
  getWorkerById,
  getWorks,
  updateWorker,
  uploadFile,
} from "../Api/Api";
import { useAuth } from "../Context/AuthContext";

const UpdateWorker = () => {
  const navigate = useNavigate();
  const { employer } = useAuth();
  let { id } = useParams();
  const [worker, setWorker] = useState({});
  const [newWorker, setNewWorker] = useState({
    id: "",
    name: "",
    surname: "",
    phone_number: "",
    mail: "",
    work_id: "",
    wage: "",
    image: "",
  });
  const [works, setWorks] = useState();
  const [workByWorker, setWorkByWorker] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getWorkerById(id);
      const resolvedWorker = response?.data?.[0];
      setWorker(resolvedWorker);
      const getworks = await getWorks(employer);
      setWorks(getworks?.data);
      const getWorkData = await getWorkByWorkerId(id);
      setWorkByWorker(getWorkData.data?.[0]);
    }
    fetchData();
  }, [id]);
  useEffect(() => {
    if (worker) {
      setNewWorker({
        id: id,
        name: worker.name,
        surname: worker.surname,
        phone_number: worker.phone_number,
        mail: worker.mail,
        work_id: worker.work_id,
        wage: worker.wage,
        image: worker.image,
      });
    }
  }, [worker]);
  useEffect(() => {
    if (workByWorker) {
      setNewWorker((prev) => ({
        ...prev,
        work_name: workByWorker.work_name || "",
      }));
    }
  }, [workByWorker]);

  const handleUpdate = async () => {
    try {
      if (
        newWorker.name != "" &&
        newWorker.surname != "" &&
        newWorker.phone_number != "" &&
        newWorker.mail != "" &&
        newWorker.wage != ""
      ) {
        let updatedWorker = await updateWorker(newWorker);
        if (updatedWorker.desc == 1) {
          toast.success("Çalışan Düzenlendi");
          navigate(`/worker/${id}`);
        }
      } else {
        alert("Alanlar Boş Bırakılamaz");
      }
    } catch (error) {
      alert("Hata  : " + error);
    }
  };
  const handleUpload = async (event) => {
    let uploadedFile = await uploadFile(event.target.files[0]);
    if (uploadedFile.path) {
      -setNewWorker({ ...newWorker, image: uploadedFile.path });
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[40%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">
          ÇALIŞAN BİLGİLERİNİ DÜZENLE
        </h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newWorker)}</small>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Çalışan Adı
          </label>
          <input
            type="text"
            value={newWorker.name}
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
            value={newWorker.surname}
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
            value={newWorker.phone_number}
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
            placeholder="ornek@gmail.com"
            value={newWorker.mail}
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
            value={newWorker.wage}
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
              onClick={() => handleUpdate()}
            >
              <p className="text-xl">KAYDET</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateWorker