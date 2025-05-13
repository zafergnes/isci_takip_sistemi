import React , { useState}from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { getWorkById } from '../Api/Api';
const UpdateWork = () => {

  const [newWork, setNewWork] = useState({
      work_name: "",
      work_desc: "",
      cost_of_work: "",
      work_address: "",
    });

  let { id } = useParams();
    const [work, setWork] = useState(null);
    useEffect(() => {
      async function fetchData() {
        const allWork = await getWorkById(id);
        setWork(allWork.data[0]);

      }
      fetchData();
    }, [id]);

    useEffect(() => {
      if (work) {
        setNewWork({
          work_name: work.work_name || "",
          work_desc: work.work_desc || "",
          cost_of_work: work.cost_of_work || "",
          work_address: work.address || "",
        });
      }
    }, [work]);

    const blankWork = {
        work_name:work&&work.work_name,
        work_desc: work&&work.work_desc,
        cost_of_work: work&&work.cost_of_work,
        work_address: work&&work.address,
  };


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
            İş Adresi
          </label>
          <input
            type="text"
            className="bg-white h-10 border border-gray-300 rounded my-2 p-2"
            value={newWork.work_address}
            onChange={(e) =>
              setNewWork({ ...newWork, work_address: e.target.value })
            }
          />

          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            İş Bedeli
          </label>
          <input
            type="number"
            required
            className="bg-white h-10 border border-gray-300 rounded my-2 p-2"
            value={newWork.cost_of_work}
            onChange={(e) =>
              setNewWork({ ...newWork, cost_of_work: e.target.value })
            }/>
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