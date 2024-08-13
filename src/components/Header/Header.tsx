import { NavBar } from "../NavBar/NavBar";
import logo from '../../assets/logo.png'
import { HandHeart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="max-w-7xl mx-auto mt-10 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[36px]">
          <img src={logo} alt="Logo" className="h-28" />
          <span className="flex flex-col items-center gap-1">
            <h1 className="font-montserrat text-5xl text-rose-500 font-extrabold"><strong>Coração Solidário</strong></h1>
            <p className="font-montserrat text-xl text-rose-500 italic font-medium">Ponte para o futuro: Juntos por todes</p>
          </span>
        </div>
        <div className="flex gap-5">
          <Link to="/login">
            <button className="w-44 h-16 text-2xl font-medium leading-5 border border-rose-500 rounded-3xl text-rose-500 hover:bg-rose-500 hover:text-rose-50 hover:scale-110 transition-all">
              Acesse sua conta
            </button>
          </Link>
          <Link to="/">
            <button className="flex items-center justify-center gap-3 w-44 h-16 bg-rose-500 text-2xl font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">
              DOAR
              <HandHeart size={32} />
            </button>
          </Link>
        </div>
      </div>
      <NavBar />
    </header>
  )
}