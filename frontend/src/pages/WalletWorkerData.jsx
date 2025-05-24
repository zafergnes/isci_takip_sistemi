import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../components/Calendar";
import {
  addWorkerPayment,
  deleteWorker,
  deleteWorkerPayments,
  getWalletWorkerDataByWorkerID,
  getWorkByWorkerId,
} from "../Api/Api";
import { Link } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import { useAuth } from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";

const WalletWorkerData = () => {
  const navigate = useNavigate();
  const apiURL = "http://localhost:3000/";
  let { id } = useParams();
  const { employer } = useAuth();
  const [worker, setWorker] = useState();
  const [workByWorker, setWorkByWorker] = useState();
  const [showPaymentInput, setShowPaymentInput] = useState(false);

  const [newPaymentAmount, setNewPaymentAmount] = useState({
    worker_id: id,
    amount_paid: "",
    employer_id: employer?.id,
  });
  useEffect(() => {
    async function fetchData() {
      const getWorker = await getWalletWorkerDataByWorkerID(id, employer);
      setWorker(getWorker?.data[0]);
      const getWorkData = await getWorkByWorkerId(id, employer);
      setWorkByWorker(getWorkData?.data?.[0]);
    }
    fetchData();
  }, [id, employer]);
  const handleUpload = async () => {
    try {
      let addedPaymentData = await addWorkerPayment(newPaymentAmount);
      if (addedPaymentData.length != 0) {
        setNewPaymentAmount({
          worker_id: id,
          amount_paid: "",
          employer_id: employer?.id,
        });
        alert("Ödeme Başarıyla Eklendi");

        // eklenen ödeme anlık gözüksün diye veriyi tekrar çektim
        const getWorker = await getWalletWorkerDataByWorkerID(id, employer);
        setWorker(getWorker?.data[0]);
      } else {
        alert("Ödeme Eklenirken Bir Sorun Oluştu");
      }
    } catch (error) {
      console.error(error);
      alert("Ödeme Eklenirken Bir Sorun Oluştu");
    }
  };
  const handleDelete = async () => {
    try {
      if (confirm("Çalışanı Silmek İstediğinize Emin Misiniz?")) {
        const deletedWorker = await deleteWorker(id);
        if (deletedWorker.desc === 1) {
          alert("Çalışan Başarıyla Silindi.");
          navigate("/workers");
        } else {
          alert("Çalışan Silinemedi. Bir hata oluştu.");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deletePayment = async (paymentID) => {
    try {
      if (confirm("Ödeme Silinecek Eminmisiniz?")) {
        const deletedPayment = await deleteWorkerPayments(paymentID);
        if (deletedPayment.desc === 1) {
          alert("Ödeme Başarıyla Silindi.");
          const getWorker = await getWalletWorkerDataByWorkerID(id, employer);
          setWorker(getWorker?.data[0]);
        } else {
          alert("Silme İşlemi Başarısız Oldu");
        }
      } else alert("Vazgeçildi.");
    } catch (error) {
      console.log(error);
    }
  };
  if (worker)
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col rounded-4xl bg-white p-5 mx-auto w-[60%]">
          <img
            src={apiURL + worker.image}
            className="flex justify-center items-center rounded-full h-[250px] w-[240px] m-auto pt-5"
          />
          <p className="flex justify-center items-center text-3xl mt-2 font-bold italic">
            {worker.name + " " + worker.surname}
          </p>
          <div className="m-2 p-2 text-[17px]">
            <div className="flex flex-col justify-center items-center my-5 gap-5 bg-gray-200 p-2 w-[750px] mx-auto rounded-4xl shadow-2xl">
              <p className="flex justify-start items-start">
                <b>Kayıt Tarihi : &nbsp;</b>
                {worker.registration_date}
              </p>

              <p className="flex justify-start items-start">
                <b>Telefon Numarası : &nbsp;</b>
                {worker.phone_number}
              </p>

              <p className="flex justify-start items-start">
                <b>E-mail Adresi : &nbsp;</b>
                {worker.mail}
              </p>

              <p className="flex justify-start items-start">
                <b>Çalışılan İş : &nbsp;</b>
                {workByWorker?.work_name || " "}
              </p>

              <p className="flex justify-start items-start">
                <b>Yevmiye Tutarı: &nbsp;</b>
                {worker.wage}
              </p>
            </div>
            <div className="flex justify-center items-center mt-10 gap-5 bg-gray-300 h-[70px] w-[700px] mx-auto rounded-4xl shadow-2xl">
              <p className="flex justify-start items-start">
                <b>Alması Gereken Tutar: &nbsp;</b>
                {worker.days_worked * worker.wage}
              </p>

              <p className="flex justify-start items-start">
                <b>Aldığı Tutarı: &nbsp;</b>
                {worker.total_payments}
              </p>

              <p className="flex justify-start items-start">
                <b>Kalan Borç Tutarı: &nbsp;</b>
                {worker.days_worked * worker.wage - worker.total_payments}
              </p>
            </div>

            {/* Ödemeler */}
            <div className="flex flex-col justify-center p-3 items-center mt-10 gap-5 bg-gray-300 w-[600px] mx-auto rounded-4xl shadow-2xl">
              <p className="flex justify-center text-3xl font-bold">Ödemeler</p>
              {worker && worker.payments.length > 0 ? (
                worker.payments.map((x, i) => {
                  return (
                    <div className="bg-gray-200 rounded-2xl p-2">
                      <p className="flex justify-start items-start">
                        <b>{i + 1}. Ödenen Tutarı: &nbsp;</b>
                        {x.amount_paid}
                        <b className="ml-20">Ödeme Tarihi :&nbsp;</b>
                        {x.amount_paid_time}
                        <button
                          onClick={() => deletePayment(x.id)}
                          className=" flex justify-end ml-5 bg-blue-500 rounded-2xl p-1 cursor-pointer"
                        >
                          ❌
                        </button>
                      </p>
                    </div>
                  );
                })
              ) : (
                <p className="text-red-500 font-bold bg-gray-200 rounded-3xl p-4">
                  Hiçbir Ödeme Yapılmadı.
                </p>
              )}
              {showPaymentInput && (
                <div className="flex flex-col items-center gap-3 mt-4">
                  <small>{JSON.stringify(newPaymentAmount)}</small>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    placeholder="Tutar girin"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setShowPaymentInput(false);
                        handleUpload();
                      }
                    }}
                    value={newPaymentAmount.amount_paid}
                    onChange={(e) =>
                      setNewPaymentAmount({
                        ...newPaymentAmount,
                        amount_paid: e.target.value,
                      })
                    }
                    className="p-2 rounded-md border border-gray-400  bg-white h-10"
                  />
                  <button
                    onClick={() => {
                      setShowPaymentInput(false);
                      handleUpload();
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Kaydet
                  </button>
                </div>
              )}
              <button
                className=" flex w-[150px] h-[40px] text-white font-bold text-center bg-blue-500 rounded-xl shadow-2xl cursor-pointer  items-center justify-center hover:bg-blue-600 "
                onClick={() => setShowPaymentInput(true)}
              >
                Ödeme Yap
              </button>
            </div>
          </div>

          {/* ! Çalışılan Günler */}
          <div className="flex flex-col justify-center items-center bg-gray-300  rounded-3xl mx-auto w-[800px] mt-15 p-10">
            <p className="mb-7 rounded-4xl p-3 font-bold text-3xl">
              Çalıştığı Günler
            </p>
            <div className="bg-gray-200 p-6 rounded-4xl">
              <CalendarComponent workedDays={worker.work_dates} />
            </div>
          </div>
          <div className="flex  justify-center mt-10 w-full  items-center  gap-2 ">
            <Link to={`/update-worker/${worker.id}`}>
              <button className="flex items-center justify-center  gap-6 h-[70px] p-7  bg-blue-500 text-white rounded-xl shadow-2xl  hover:bg-blue-600">
                <p className="font-bold text-center text-xl ">
                  Çalışan Bilgilerini Düzenle
                </p>
              </button>
            </Link>
            <button
              onClick={() => handleDelete()}
              className="flex items-center justify-center gap-6 h-[70px] p-7 font-bold   text-center text-xl  bg-red-500 text-white rounded-xl shadow-2xl  hover:bg-red-800 cursor-pointer"
            >
              <MdDelete />
              <p className="font-bold text-center text-xl">Çalışanı Sil</p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default WalletWorkerData