import React, { useEffect, useState } from 'react'
import WalletWorkerCard from "../components/WalletWorkerCard";
import { getWalletWorkerData, getWorkers } from '../Api/Api';

const WalletWorker = () => {
    const [workers, setWorkers] = useState(null);
      useEffect(() => {
        async function fetchData() {
          const allWorkers = await getWalletWorkerData();
          setWorkers(allWorkers.data);
        }
        fetchData();
      }, []);
      const worker = [
        // ? farklı tablolardan çekilecek veriler
        {
          worker_id: 1,
          worker_name: "Veli",
          worker_surname: "Kara",
          worker_img: "",
          amount_paid: 15000,
          amount_to_be_paid: 20000,
          days_worked: 15,
          workedDays: [
            "2025-05-09",
            "2025-05-10",
            "2025-05-11",
            "2025-05-12",
            "2025-05-13",
            "2025-05-15",
          ],
        }
      ];
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 min-w-[1000px]">
      {workers&&workers.map((x, i) => {
        return <WalletWorkerCard key={i} workers={x} />;
      })}
    </div>
  );
};
export default WalletWorker