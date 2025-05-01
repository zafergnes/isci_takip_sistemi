import React , { useState}from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const UpdateWork = () => {
  const blankWork = {
    work_name: "Düzenlenecek İşin Adı ",
    work_desc: "Düzenlenecek İş Hakkında Açıklama",
    work_status: "İşin Durumu",
  };
  const [newWork, setNewWork] = useState(blankWork);
  const status = [
    { text: "Başlanmadı", path: "/" },
    { text: "Devam Ediyor", path: "/" },
    { text: "Bitti", path: "/" },
  ];
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[60%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">İŞİ DÜZENLE</h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newWork)}</small>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş Adı
          </label>
          <input
            type="text"
            required
            className="bg-white h-10 border border-gray-300 rounded my-2 p-2"
            value={newWork.work_name}
            onChange={(e) =>
              setNewWork({ ...newWork, work_name: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş Açıklama
          </label>

          <textarea
            type="text"
            placeholder=" Doldurulması İsteğe Bağlıdır."
            className="bg-white  border h-[100px]  border-gray-300 rounded my-2 p-2"
            value={newWork.work_desc}
            onChange={(e) =>
              setNewWork({ ...newWork, work_desc: e.target.value })
            }
          />
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş durumu
          </label>
          <select
            className="bg-white rounded h-10 my-2 p-2"
            value={newWork.work_status}
            onChange={(e) =>
              setNewWork({ ...newWork, work_status: e.target.value })
            }
          >
            <option value="" default disabled>
              İş Durumu Seç
            </option>
            {status.map((x) => {
              return <option value={x.text}>{x.text}</option>;
            })}
          </select>
          <div className="mt-5 flex justify-center">
            <Button
              className="flex justify-center items-center mx-auto w-[260px] h-[70px]"
              variant="contained"
            >
              Kaydet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateWork