import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function LoginRegisterPage() {
  const { employer } = useAuth();
  useEffect(() => {
    if (employer != null) navigate("/works");
  }, [employer]);
  const newBlankEmployer = {
    name: "",
    surname: "",
    phone_number: "",
    mail: "",
    password: "",
  };
  const blankEmployer = {
    mail: "",
    password: "",
  };
  const [activeTab, setActiveTab] = useState("giris");
  const [loginInfo, setLoginInfo] = useState(blankEmployer);
  const [registerInfo, setRegisterInfo] = useState(newBlankEmployer);

  const handleLoginChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      if (!res.ok) {
        alert("Giriş başarısız");
        return;
      }

      const data = await res.json();
      login(data);
      navigate("/works");
      toast.success("Hoş Geldiniz");
      localStorage.setItem("employer", JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };
  const handleRegister = async () => {
    try {
      if (
        !registerInfo.name ||
        !registerInfo.surname ||
        !registerInfo.mail ||
        !registerInfo.phone_number ||
        !registerInfo.password
      ) {
        alert("Lütfen tüm alanları doldurun.");
        return;
      }
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerInfo),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Kayıt başarısız");
        return;
      }

      const data = await res.json();
      login(data);
      navigate("/works");
      localStorage.setItem("employer", JSON.stringify(data));
      toast.success("Hoş Geldiniz");
    } catch (err) {
      console.error(err);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-10 relative border border-blue-100">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-md text-3xl font-bold">
          👷
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {activeTab === "giris"
              ? "İşveren Giriş Paneli"
              : "Yeni İşveren Kaydı"}
          </h2>
          <p className="text-sm text-gray-500">
            {activeTab === "giris"
              ? "İş takibi ve yönetim için hesabınıza giriş yapın"
              : "Yeni bir hesap oluşturarak iş yönetimine başlayın"}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            className={`w-1/2 py-2 rounded-xl font-medium transition ${
              activeTab === "giris"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("giris")}
          >
            Giriş
          </button>
          <button
            className={`w-1/2 py-2 rounded-xl font-medium transition ${
              activeTab === "kayit"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("kayit")}
          >
            Kayıt
          </button>
        </div>

        {activeTab === "giris" ? (
          <>
            <form className="space-y-5 mt-6">
              <div>
                <label className="text-sm text-gray-700">E-posta</label>
                <input
                  type="mail"
                  name="mail"
                  value={loginInfo.mail}
                  onChange={handleLoginChange}
                  placeholder="ornek@firma.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Şifre</label>
                <input
                  type="password"
                  name="password"
                  value={loginInfo.password}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleLogin();
                  }}
                  onChange={handleLoginChange}
                  placeholder="******"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold shadow-md"
              >
                Giriş Yap
              </button>
            </form>
          </>
        ) : (
          <>
            <form className="space-y-5 mt-6">
              <div>
                <label className="text-sm text-gray-700">İsminiz</label>
                <input
                  type="text"
                  name="name"
                  value={registerInfo.name}
                  onChange={handleRegisterChange}
                  placeholder="Ali "
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Soyadınız</label>
                <input
                  type="text"
                  name="surname"
                  value={registerInfo.surname}
                  onChange={handleRegisterChange}
                  placeholder="Kara"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">E-posta</label>
                <input
                  type="mail"
                  name="mail"
                  value={registerInfo.mail}
                  onChange={handleRegisterChange}
                  placeholder="ornek@firma.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={registerInfo.phone_number}
                  onChange={(e) =>
                    setRegisterInfo({
                      ...registerInfo,
                      phone_number: e.target.value,
                    })
                  }
                  placeholder="0512 145 12 32"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Şifre</label>
                <input
                  type="password"
                  name="password"
                  value={registerInfo.password}
                  onChange={handleRegisterChange}
                  placeholder="******"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="button"
                onClick={handleRegister}
                className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold shadow-md"
              >
                Kayıt Ol
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
