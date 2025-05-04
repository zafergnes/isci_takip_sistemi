import React from 'react'

const WorkerData = ({ payments }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col rounded-4xl bg-white p-5 mx-auto w-[60%]">
        <img
          src={payments.worker_img}
          className="flex justify-center items-center rounded-full h-[200px] m-auto pt-5"
        />
        <p className="flex justify-center items-center text-3xl mt-2 font-bold italic">
          {payments.worker_name + " " + payments.worker_surname}
        </p>
        <div className="m-2 p-2 text-[17px]">
          <div className="flex flex-col justify-center items-center my-5 gap-5 bg-gray-200 p-2 w-[750px] mx-auto rounded-4xl shadow-2xl">
            <p className="flex justify-start items-start">
              <b>Kayıt Tarihi : &nbsp;</b>
              {payments.worker_registration_date}
            </p>

            <p className="flex justify-start items-start">
              <b>Telefon Numarası : &nbsp;</b>
              {payments.worker_phone_number}
            </p>

            <p className="flex justify-start items-start">
              <b>E-mail Adresi : &nbsp;</b>
              {payments.worker_email}
            </p>

            <p className="flex justify-start items-start">
              <b>Çalışılan İş : &nbsp;</b>
              Sıva İşi
            </p>

            <p className="flex justify-start items-start">
              <b>Yevmiye Tutarı: &nbsp;</b>
              {payments.worker_wage}
            </p>
          </div>
          <div className="flex justify-center items-center mt-10 gap-5 bg-gray-300 h-[70px] w-[700px] mx-auto rounded-4xl shadow-2xl">
            <p className="flex justify-start items-start">
              <b>Alması Gereken Tutarı: &nbsp;</b>
              {payments.amount_to_be_paid}
            </p>

            <p className="flex justify-start items-start">
              <b>Aldığı Tutarı: &nbsp;</b>
              {payments.amount_paid}
            </p>

            <p className="flex justify-start items-start">
              <b>Kalan Borç Tutarı: &nbsp;</b>
              {payments.debt}
            </p>
          </div>
          <div className="flex flex-col justify-center p-3 items-center mt-10 gap-5 bg-gray-300 w-[600px] mx-auto rounded-4xl shadow-2xl">
            <p className="flex justify-center text-3xl font-bold">Ödemeler</p>
            {payments.payments.map((x, i) => {
              return (
                <div className='bg-gray-200 rounded-2xl p-2'>
                  <p className="flex justify-start items-start">
                  <b>{i + 1}. Ödenen Tutarı: &nbsp;</b>
                  {x.amount_paid}
                  <b className="ml-20">Ödeme Tarihi :&nbsp;</b>
                  {x.amount_paid_time}
                </p>
                </div>

              );
            })}
            <button className=" flex w-[150px] h-[40px] text-white font-bold text-center bg-blue-500 rounded-xl shadow-2xl cursor-pointer  items-center justify-center hover:bg-blue-600 ">
              Ödeme Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerData