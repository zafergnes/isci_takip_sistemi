import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Layout = () => {
  const menu = [
    { title: "İşler", path: "/works" },
    { title: "Çalışanlar", path: "/workers" },
    { title: "Günlük Yevmiye", path: "/worker-input" },
    { title: "Hesap", path: "/wallet" },
  ];
  const { employer, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!employer) navigate("/");

  return (
    <>
      {/* <header></header> */}
      <div className="border-b-2 shadow-2xl bg-slate-700 ">
        <div className="flex justify-between px-5 py-5 shadow-2xl">
          <Link to="/works">
            <div className="flex">
              <img
                src="worker_icon.svg"
                className=" h-15 flex mx-3 justify-center items-center"
              />
              <span className="font-extrabold text-3xl flex justify-center items-center text-white">
                {" "}
                İŞÇİ TAKİP SİSTEMİ
              </span>
            </div>
          </Link>

          <div className="flex ">
            <ul className="flex">
              {menu.map((x, i) => {
                return (
                  <li>
                    <Link
                      className="p-4 px-4 mr-10 items-center justify-center flex font-bold hover:text-red-500 visited :text-blue-500 text-white"
                      to={x.path}
                    >
                      <span>{x.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/add"
              className="bg-slate-900 font-bold text-white px-2 py-1 w-40 rounded items-center
                justify-center flex shadow-2xl hover:bg-blue-500     hover:text-black "
            >
              <button>
                + <span>EKLE</span>
              </button>
            </Link>
            <div className="relative flex items-center ml-5" ref={menuRef}>
              <span
                className="text-white mx-5 flex justify-center items-center font-bold cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              >
                Hoş geldin {employer.name}
                <MdOutlineArrowDropDown className="ml-3" />
              </span>
              {open && (
                <div className="absolute right-0  mt-15 w-32 bg-white rounded shadow-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <Home></Home> */}
      <div className="flex  mx-auto px-5 md:px-20 bg-slate-500  ">
        <div className="mt-5 mb-5 mx-auto min-h-[400px] w-full  overflow-x-auto">
          <Outlet></Outlet>
        </div>
      </div>

      {/* <footer></footer> */}
      <div className="flex bg-slate-700 mt-auto end-0 ">
        <div className="flex mx-auto px-20 py-20 items-center justify-center">
          <h3 className="text-white text-4xl flex">İŞÇİ TAKİP SİSTEMİ</h3>
          <br />
        </div>
      </div>
    </>
  );
};

export default Layout;
