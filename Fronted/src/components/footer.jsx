import { Github, Linkedin, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="w-full h-auto py-10 bg-[#333027] text-white flex flex-col items-center justify-center">
        <div className="w-full h-auto flex flex-row items-center justify-center mb-5">
          <Link to={"https://github.com/ElDragon-578"} >
            <Github className="w-10 h-10 text-white mr-5" />
          </Link>
          <Link to={"https://www.linkedin.com/in/jhon-deivid-ramirez-nuñez-softwaredeveloper578"}>
            <LinkedinIcon className="w-10 h-10 text-white"/>
          </Link>
        </div>
        <h1>Todos los derechos reservado &#169; Jhon Deivid Ramirez Nuñez</h1>
      </footer>
    </>
  );
}
