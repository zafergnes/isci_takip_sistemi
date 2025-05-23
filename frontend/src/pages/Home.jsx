import React from "react";
import {
  CalendarIcon,
  CalculatorIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <CalendarIcon className="h-10 w-10 text-blue-400" />,
    title: "Çalışma Takibi ve Şeffaflık",
    desc: "Çalışanların mesai saatlerini ve çalıştığı günleri görsel bir takvimle izleme.",
  },
  {
    icon: <CalculatorIcon className="h-10 w-10 text-blue-400" />,
    title: "Otomatik Ücret ve Hesaplama",
    desc: "Kullanıcı karmaşık maaliyet hesaplamalarından kurtulur. İş'ten alınan tutar, alınması gerekentutar, Çalışana ödenmesi gereken tutar tutarlar otamatik hesaplanır.",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-10 w-10 text-blue-400" />,
    title: "Mobil Uyumluluk",
    desc: "Telefon veya tabletten erişim imkanı ile her an, her yerde kontrol sizde.",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen  ">
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70 z-10"></div>
          <img
            src="./home-1.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İşçi Yevmiye Takibinizi{" "}
            <span className="text-blue-400">Kolaylaştırın</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Çalışanlarınızı ve işlerinizi tek bir platformda yönetin. Modern
            çözümlerle zaman kazanın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#bilgi"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Neler Sunuyoruz
            </a>
            <a
              href="/login"
              className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all"
            >
              Hemen Başlayın
            </a>
          </div>
        </div>
      </div>

      <div id="bilgi" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platformumuzun Özellikleri
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İşçi yevmiye takibini kolaylaştıran modern çözümlerimizle tanışın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all group hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="bg-slate-700/70 p-4 rounded-xl inline-flex mb-6 group-hover:bg-blue-500/20 transition-all">
                  {React.cloneElement(feature.icon, {
                    className: "h-8 w-8 text-blue-400",
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-white mb-6">
                İşçi Yevmiye Takip Sistemi Nedir?
              </h2>
              <p className="text-gray-300 mb-4">
                İşçi Yevmiye Takip Sistemi, işletmelerin ücret yönetimini
                modernize eden pratik bir çözümdür. Çalışanlarınızın
                performansını anlık takip edin, ödemeleri otomatik hesaplayın.
              </p>
              <p className="text-gray-400 mb-6">
                Mobil ve masaüstü uyumlu arayüzle her yerden erişilebilir,
                özelleştirilmiş raporlarla finansal kontrolü elinize alın.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">Kolay Kullanım</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">Zaman Tasarrufu</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">Finansal Kontrol</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full"></div>
                <img
                  src="./home-1.jpg"
                  alt="İşçi Yevmiye Takip"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemen Kullanmaya Başlayın
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            İşçi yevmiye takibinizi modernleştirin, zaman kazanın ve
            maliyetlerinizi optimize edin.
          </p>
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 inline-block"
          >
            Ücretsiz Hesap Oluşturun
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
