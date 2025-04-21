import React from 'react'
import HomeCard1 from '../components/HomeCard1'
import HomeCard2 from '../components/HomeCard2'
import HomeCard3 from '../components/HomeCard3'


const Home = () => {
    const h1 = "Ödeme Raporları: Aylık/haftalık Excel/PDF raporları oluşturma.";
    const h2 = "Mobil Uyumluluk: Telefon veya tabletten erişim imkanı.";
    const h3 =
      "Bildirim Sistemi: Ödeme tarihi veya eksik bilgi hatırlatıcıları.";
    return (
      <>
        <div className="flex justify-center items-center overflow-hidden p-5 gap-5">
          <div>
            <h1 className="flex items-center justify-center text-4xl text-white font-bold mx-auto mt-15">
              İşçi Yevmiye Takibinizi Kolaylaştırın.
            </h1>
            <p className="flex items-center justify-center text-gray-300 font-bold mx-auto mb-10 mt-2">
              Çalışanlarınızı ve İşlerinizi tek bir platformda yönetin.
            </p>
          </div>
        </div>
        <div className="flex justify-baseline m-5 shadow-2xl rounded-[50px] bg-slate-700">
          <img src="./home-1.jpg" alt="" className="w-[600px] rounded-[50px]" />
          <p className=" flex ml-25 mr-2 text-[25px] p-5  font-medium text-gray-300 leading-12 ">
            İşçi Yevmiye Takip Sistemi, işverenlerin ve çalışanların ücret
            yönetimini kolaylaştıran kapsamlı bir platformdur. Çalışanlarınızın
            mesai saatleri, primler, avanslar ve ödemeler tek bir panelde
            otomatik hesaplanır. Manuel kayıt hatalarını ortadan kaldırarak
            şeffaf ve güvenilir bir süreç sunar. Mobil uyumlu arayüzle
            istediğiniz yerden erişim sağlayabilir, Excel/PDF raporlarıyla
            finansal takip yapabilirsiniz. Çalışanlar, kendi hesap panellerinden
            çalışma detaylarını görüntüleyerek haklarını net şekilde takip eder.
            Zamandan tasarruf edin, yasal uyumluluğu garanti altına alın ve iş
            verimliliğinizi artırın!
          </p>
        </div>
        <div className="flex justify-end mt-25 shadow-2xl rounded-[50px] bg-slate-700">
          <p className=" flex mr-25 ml-2 text-[25px] p-5  font-medium text-gray-300 leading-12 ">
            İşçi Yevmiye Takip Sistemi, işverenlerin ve çalışanların ücret
            yönetimini kolaylaştıran kapsamlı bir platformdur. Çalışanlarınızın
            mesai saatleri, primler, avanslar ve ödemeler tek bir panelde
            otomatik hesaplanır. Manuel kayıt hatalarını ortadan kaldırarak
            şeffaf ve güvenilir bir süreç sunar. Mobil uyumlu arayüzle
            istediğiniz yerden erişim sağlayabilir, Excel/PDF raporlarıyla
            finansal takip yapabilirsiniz. Çalışanlar, kendi hesap panellerinden
            çalışma detaylarını görüntüleyerek haklarını net şekilde takip eder.
            Zamandan tasarruf edin, yasal uyumluluğu garanti altına alın ve iş
            verimliliğinizi artırın!
          </p>
          <img src="./home-1.jpg" alt="" className="w-[600px] rounded-[50px]" />
        </div>
        <p></p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-[30px] justify-center">
          <HomeCard1 text={h1} />
          <HomeCard1 text={h2} />
          <HomeCard1 text={h3} />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-[30px]">
          <HomeCard2 />
          <HomeCard2 />
          <HomeCard2 />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-[30px]">
          <HomeCard3 />
          <HomeCard3 />
          <HomeCard3 />
        </div>
      </>
    );
}

export default Home