import { NavBar } from "../NavBar/NavBar";
import logo from '../../assets/logo.png'
import { HandHeart } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="max-w-7xl mx-auto mt-10 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[36px]">
          <img src={logo} alt="Logo" className="h-28" />
          <span className="flex flex-col items-center gap-1">
            <h1 className="text-5xl text-rose-500 font-extrabold"><strong>Coração Solidário</strong></h1>
            <p className="text-xl text-rose-500 italic font-medium">Ponte para o futuro: Juntos por todes</p>
          </span>
        </div>
        <div className="flex item gap-4">
          <button className="w-44 h-16 border border-rose-500 text-2xl font-medium rounded-3xl leading-6 text-rose-500 hover:bg-rose-500 hover:text-rose-50 hover:scale-110 transition-all">
            Acesse sua conta
          </button>
          <button className="flex items-center gap-3 justify-center w-44 h-16 bg-rose-500 text-2xl font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">
            DOAR
            <HandHeart size={32} />
          </button>
        </div>
      </div>
      <NavBar />
    </header>
  )
}