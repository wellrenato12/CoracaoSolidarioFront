import footerBackground from '../../assets/footerBackground.png'

export function Footer() {
  return (
    <footer className="relative h-full">
      <img className='w-full object-cover' src={footerBackground} alt="Footer" />
      <div className='absolute inset-0 flex items-end justify-center md:pb-4'>
        <p className='font-montserrat text-[12px] font-bold text-rose-50'>&copy; 2024 - Coração Solidário - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}