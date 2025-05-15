import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Button from "@mui/material/Button";
import { getWorkByWorkerId, getWorkerById, getWorks } from '../Api/Api';

const UpdateWorker = () => {
  let {id} = useParams()
  const [newWorker, setNewWorker] = useState({
    name: "",
    surname: "",
    phone_number: "",
    mail: "",
    work_id: "",
    work_name: "",
    wage: "",
  });
  const [worker,setWorker]=useState({});
  const [works,setWorks]=useState();
  const [workByWorker,setWorkByWorker] = useState();

  useEffect( () =>{
    async function fetchData() {
      const response = await getWorkerById(id);
      const resolvedWorker = response?.data?.[0];
      setWorker(resolvedWorker);
      const getworks = await getWorks();
      setWorks(getworks.data);
      const getWorkData = await getWorkByWorkerId(id);
      setWorkByWorker(getWorkData.data?.[0]);
    }
    fetchData()

  }, [id])
  useEffect(() => {
    if (worker) {
      setNewWorker({
        name: worker.name,
        surname: worker.surname,
        phone_number: worker.phone_number,
        mail: worker.mail,
        work_id: worker.work_id ,
        wage: worker.wage
      });
    }
  }, [worker]);
  useEffect(() => {
    if (workByWorker) {
      setNewWorker(prev => ({
        ...prev,
        work_name: workByWorker.work_name || ""
      }));
    }
  }, [workByWorker]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-300 w-[40%] p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center">ÇALIŞAN BİLGİLERİNİ DÜZENLE</h1>
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
            <option value={newWorker.work_id}  default disabled>
            {newWorker.work_name}
            </option>
            {Array.isArray(works) && works.map((x, i) => {
              return <option key={i} value={x.id}>{x.work_name}</option>;
            })}
          </select>
          <label htmlFor="" className="ml-1 text-xl text-gray-700">
            Yevmiye Ücreti
          </label>
          <input
            type="number"
            value={newWorker.wage}
            className="bg-white w-full mt-3 border border-gray-300 rounded h-10 my-2 p-2"
            onChange={(e) =>
              setNewWorker({ ...newWorker, wage: e.target.value })
            }
          />
          <div className=" flex mt-5 justify-end ">
            <Button variant="contained" className="w-full h-15">
              <p className="text-xl">KAYDET</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateWorker