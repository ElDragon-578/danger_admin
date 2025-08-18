import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";
import { useState } from "react";
import ExhibitionArticles from "../article/article";

export function Main() {
  return (
    <>
      <NavBar />
      <header className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#F5C431] to-[#A18E55]">
        <h1 className=" text-center text-white text-7xl tracking-widest mb-5">
          Administracion de riesgos
        </h1>
        <div className="w-200 h-2 bg-white"></div>
      </header>
      <article className="bg-[#4A4840]">
        <ExhibitionArticles />
      </article>
      <Footer />
    </>
  );
}
