import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Menu } from "lucide-react";

export function NavBar() {
  return (
    <>
      <nav className="w-full h-auto flex flex-row place-content-between p-2">
        <div className="flex flex-row items-center">
          <Link>
            <img src={Logo} className="w-10 h-10 rounded-4xl" />
          </Link>
        </div>
        <div className="flex flex-row items-center ">
          <Link to={""} className="mr-2">Inicio</Link>
          <button to={""}><Menu className="text-amber-400"/></button>
        </div>
      </nav>
    </>
  );
}
