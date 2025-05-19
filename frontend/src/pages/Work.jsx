import { useState } from "react";
import { useEffect } from "react";


import { Link, useParams } from "react-router-dom";
import {
  getWorkById,
  getWorkerByWorkId,
  getWorkPaymentsByWorkId,
  getSumWorkPayments,
  addWorkPayment,
} from "../Api/Api";
import { useAuth } from "../context/AuthContext";

const Work = () => {
  const { employer } = useAuth();
  let { id } = useParams();
  const [work, setWork] = useState(null);
  const [workers, setWorkers] = useState(null);
  const [workPayments, setWorkPayments] = useState(null);
  const [sumPayments, setSumPayments] = useState(null);
  const [showPaymentInput, setShowPaymentInput] = useState(false);

  const [newPaymentAmount, setNewPaymentAmount] = useState({
    work_id: id,
    amount_received: "",
    employer_id: employer?.id,
  });

  useEffect(() => {
    async function fetchData() {
      const allWork = await getWorkById(id);
      setWork(allWork.data[0]);
      const allWorker = await getWorkerByWorkId(id);
      setWorkers(allWorker.data);
      const allWorkPayment = await getWorkPaymentsByWorkId(id);
      setWorkPayments(allWorkPayment.data);
      const SumAllPayments = await getSumWorkPayments(id);
      setSumPayments(SumAllPayments.data[0]);
    }
    fetchData();
  }, [id]);

  const handleUpload = async () => {
    try {
      let addedPaymentData = await addWorkPayment(newPaymentAmount);
      if (addedPaymentData.length != 0) {
        setNewPaymentAmount({
          work_id: id,
          amount_received: "",
          employer_id: employer?.id,
        });
        alert("Ödeme Başarıyla Eklendi");

        // eklenen ödeme anlık gözüksün diye veriyi tekrar çektim
        const allWorkPayment = await getWorkPaymentsByWorkId(id);
        setWorkPayments(allWorkPayment.data);

        const SumAllPayments = await getSumWorkPayments(id);
        setSumPayments(SumAllPayments.data[0]);
      } else {
        alert("Ödeme Eklenirken Bir Sorun Oluştu");
      }
    } catch (error) {
      console.error(error);
      alert("Ödeme Eklenirken Bir Sorun Oluştu");
    }
  };

  const deleteAlert = () => {
    if (
      confirm(
        "Çalışan İşten Çıkarılacak Emin Misiniz! \nKullanıcın kayıtlarını daha sonrada tekrar görebilirsiniz"
      )
    )
      console.log("silindi");
    else console.log("Vazgeçti");
  };
  const deletePaymentAlert = () => {
    if (confirm("Ödeme Silinecek Eminmisiniz?")) console.log("silindi");
    else console.log("Vazgeçti");
  };
  return (
    <div>
      <div className=" flex w-[70%] mx-auto p-5 bg-white rounded-3xl justify-center items-center ">
        {work && (
          <div className="">
            <div className="min-w-[800px] mx-auto">
              <h1 className=" flex text-3xl font-bold text-center justify-center ">
                {work.work_name}
              </h1>
              <span className="flex px-5 pt-2 justify-end">
                <b>İşe Başlangıç Tarihi :&nbsp;</b>
                {work.date}
              </span>
            </div>
            <div className=" px-4 ">
              <label className=" text-xl font-bold italic ">Açıklama </label>
              <p className="  text-[17px] ">{work.work_desc}</p>
            </div>

            {/* İşte Çalışan İşçiler */}
            <div className="bg-gray-300 p-1 rounded-4xl mt-10 mx-auto w-[full] ml-5 shadow-2xl ">
              {workers && workers.length > 0 ? (
                workers.map((x, i) => {
                  return (
                    <Link to={`/worker/${x.id}`} key={x.id}>
                      <div className="flex justify-start items-center border my-2 py-2 bg-gray-200 border-gray-400 rounded-4xl">
                        <p className="m-2 font-bold text-xl">{i + 1}</p>
                        <img
                          src={x.img}
                          className="h-[60px] mx-3 my-1 rounded-full"
                        />
                        <div className="w-[130px]">
                          <p className="font-bold">
                            {x.name + " " + x.surname}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="ml-5">
                            <b>Telefon :&nbsp;</b>
                            {x.phone_number}
                          </p>
                          <p className="ml-5">
                            <b>Yevmiye :&nbsp;</b>
                            {x.wage}
                          </p>
                          <p className="ml-5">
                            <b>Başlama Tarihi:&nbsp;</b>
                            {x.date}
                          </p>
                        </div>
                        <div className="flex ml-10 justify-center items-center gap-5">
                          <button className="flex w-[150px] h-[40px] text-white bg-blue-500 rounded-xl shadow-2xl cursor-pointer items-center justify-center hover:bg-blue-600">
                            <p className="font-bold text-center">
                              Verileri Gör
                            </p>
                          </button>
                          <button
                            onClick={() => deleteAlert()}
                            className="flex w-[150px] h-[40px] text-white font-bold text-center bg-blue-500 rounded-xl shadow-2xl cursor-pointer items-center justify-center hover:bg-blue-600 mr-2"
                          >
                            Çalışanı Çıkar
                          </button>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <p className="text-center text-gray-700 font-semibold p-5">
                  Çalışan işçi bulunamadı
                </p>
              )}
            </div>

            {/* İş Hakkında Bilgiler */}
            <div className="flex h-[60px] w-[60%] min-w-[700px] my-10 p-3 mx-auto bg-gray-300 shadow-2xl rounded-4xl justify-center gap-15 items-center ">
              <p>
                <b>İş Bedeli : &nbsp;</b>
                {work.cost_of_work}
              </p>

              <p>
                <b>Alınacak Tutar : &nbsp;</b>

                {(work && work.cost_of_work) -
                  (sumPayments && sumPayments.sumamount)}
              </p>
              <p>
                <b>Alınan Tutar : &nbsp;</b>
                <span>
                  {sumPayments && sumPayments.sumamount
                    ? sumPayments.sumamount
                    : 0}
                </span>
              </p>
            </div>

            {/* Ödemeler */}
            <div className="flex flex-col p-5 w-[50%] my-10 mx-auto bg-gray-300 shadow-2xl rounded-4xl justify-center gap-10 items-center ">
              {workPayments && workPayments.length > 0 ? (
                workPayments.map((x, i) => {
                  return (
                    <>
                      <div className="bg-gray-200 rounded-2xl flex justify-between  p-1 w-full">
                        <p className="flex justify-start items-start">
                          <b>{i + 1}. Alınan Tutar Tutarı: &nbsp;</b>
                          {x.amount_received}
                          <b className="ml-20"> Tarih :&nbsp;</b>
                          {x.formatted_date}
                          <button
                            className=" flex justify-end ml-5 bg-blue-500 rounded-2xl p-1 cursor-pointer"
                            onClick={() => deletePaymentAlert()}
                          >
                            ❌
                          </button>
                        </p>
                      </div>
                    </>
                  );
                })
              ) : (
                <p className="text-gray-600 font-bold">
                  İşten Ödeme Alınmadı !
                </p>
              )}
              {showPaymentInput && (
                <div className="flex flex-col items-center gap-3 mt-4">
                  <small>{JSON.stringify(newPaymentAmount)}</small>
                  <input
                    type="number"
                    placeholder="Tutar girin"
                    value={newPaymentAmount.amount_received}
                    onChange={(e) =>
                      setNewPaymentAmount({
                        ...newPaymentAmount,
                        amount_received: e.target.value,
                      })
                    }
                    className="p-2 rounded-md border border-gray-400  bg-white h-10"
                  />
                  <button
                    onClick={() => {
                      handleUpload();
                      setShowPaymentInput(false);
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Kaydet
                  </button>
                </div>
              )}
              <button
                onClick={() => setShowPaymentInput(true)}
                className="flex h-[40px] p-7 text-white bg-gray-600 rounded-xl shadow-2xl items-center justify-center font-bold text-center text-xl hover:bg-blue-600 cursor-pointer"
              >
                Ödeme Ekle
              </button>
            </div>

            {/* Bottom Butonlar */}
            <div className="flex w-full mt-15 justify-center gap-25 items-center">
              <Link to={`/update-work/${work.id}`}>
                <button className="flex h-[70px] p-7 text-white font-bold text-center text-xl bg-blue-500 rounded-xl shadow-2xl items-center justify-center gap-6 hover:bg-blue-600 cursor-pointer">
                  İş Bilgilerini Düzenle
                </button>
              </Link>
              <button className="flex h-[70px] p-7  text-white bg-blue-500 font-bold text-center text-xl rounded-xl shadow-2xl items-center justify-center gap-6 hover:bg-blue-600 cursor-pointer">
                İşi Sil
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
