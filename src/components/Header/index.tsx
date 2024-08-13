import { NavBar } from "../NavBar";
import logo from '../../assets/logo.png'

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
        <button className="w-44 h-16 bg-rose-500 font-montserrat text-3xl font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">DOAR</button>
      </div>
      <NavBar />
    </header>
  )
}