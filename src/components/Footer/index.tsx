import { Link } from 'react-router-dom'
import footer from '../../assets/footer.png'

export function Footer() {
  return (
    <footer className=" h-full">
      <nav>
        <ul className="max-w-7xl mx-auto flex items-center justify-between py-3 px-24 mb-24">
          <Link to="/about">
            <li className="text-2xl font-bold text-zinc-950 hover:underline hover:scale-110 transition-all">Quem somos</li>
          </Link>
          <Link to="/info">
            <li className="text-2xl font-bold text-zinc-950 hover:underline hover:scale-110 transition-all">O que fazemos</li>
          </Link>
          <Link to="/contact">
            <li className="text-2xl font-bold text-zinc-950 hover:underline hover:scale-110 transition-all">Contato</li>
          </Link>
        </ul>
      </nav>
      <div className='relative'>
        <img className='w-full object-cover' src={footer} alt="Footer" />
        <div className='absolute inset-0 flex items-end justify-center pb-4'>
          <p className='text-2xl font-medium text-rose-50'>&copy; 2024 - Coração Solidário - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}