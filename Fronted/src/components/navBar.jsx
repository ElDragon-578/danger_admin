import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";

export function NavBar() {
  const [showSliderMenu, setShowSliderMenu] = useState(false);

  const handleMenu = () => {
    setShowSliderMenu(true);
  };

  const buttons = [
    { content: "Tablas de Riesgo", link: "/riskTable" },
    { content: "Taller 1", link: "/workshopOne" },
    { content: "HIR", link: "/HIR" },
    { content: "Taller 2", link: "/HIRworkshop" },

  ];
  return (
    <>
      <nav className="w-full h-auto fixed top-0 left-0 flex flex-row place-content-between p-2 backdrop-blur-2xl z-10">
        <div className="flex flex-row items-center">
          <Link to={"/danger_admin"}>
            <img src={Logo} className="w-10 h-10 rounded-4xl" />
          </Link>
        </div>
        <div className="flex flex-row items-center ">
          <button onClick={handleMenu}>
            <Menu className="w-10 h-10 text-[#F5C431] cursor-pointer" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 transition-opacity flex items-start bg-black justify-end duration-400 ease-in-out  ${
          showSliderMenu ? "opacity-100 z-20" : "opacity-0 -z-40"
        }`}
        onClick={() =>{setTimeout(() => setShowSliderMenu(false), 10)}}
      >
        <article
          className={`w-80 h-full flex flex-col items-center bg-[#333027] p-6 shadow-lg transition-transform duration-300 ease-in-out ${
            showSliderMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="self-end mb-6 text-white cursor-pointer"
            onClick={() => setShowSliderMenu(false)}
          >
            <X />
          </button>
          {/* Render the buttons one by one. */}
          {buttons.map((button, index) => (
            <Link
              key={index}
              to={button.link}
              className="w-50 mb-2 p-5 text-white bg-[#F5C431] rounded-2xl hover:bg-[#C9AA4B] transition-colors duration-200 ease-in-out"
            >
              {button.content}
            </Link>
          ))}
        </article>
      </div>
    </>
  );
}
