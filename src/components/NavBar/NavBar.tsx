import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-rose-500 rounded-2xl w-40 sm:w-auto"> 
      <ul className="flex flex-col sm:flex-row items-center justify-between py-3 px-12 md:px-24">
        <Link to="/">
          <li className="font-montserrat text-[18px] font-bold text-rose-50 hover:underline hover:scale-110 transition-all">Início</li>
        </Link>
        <Link to="/about">
          <li className="font-montserrat text-[18px] font-bold text-rose-50 hover:underline hover:scale-110 transition-all">Quem somos</li>
        </Link>
        <Link to="/info">
          <li className="font-montserrat text-[18px] font-bold text-rose-50 hover:underline hover:scale-110 transition-all">O que fazemos</li>
        </Link>
        <Link to="/contact">
          <li className="font-montserrat text-[18px] font-bold text-rose-50 hover:underline hover:scale-110 transition-all">Contato</li>
        </Link>
      </ul>
    </nav>
  )
}