import { useContext } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

export function MenuMobile() {
  const { isOpen, handleIsOpen } = useContext(AuthContext)
  const Links = [
    { name: 'HOME', link: '/home' },
    { name: 'ABOUT', link: '/about' },
    { name: 'INFO', link: '/info' },
    { name: 'CONTACT', link: '/contact' },
  ]

  return (
    <div
      className="w-full fixed top-0 left-0 bg-rose-500"
      
    >
      <div className="items-center justify-between py-4 px-7">
        <div
          onClick={() => handleIsOpen()}
          className="absolute right-8 top-0.5 cursor-pointer w-7 h-7"
        >
          {isOpen ? <XMarkIcon className='text-rose-500' /> : <Bars3BottomRightIcon className='text-rose-50' />}
        </div>

        <ul
          className={`pt-12 pb-4 absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-0' : 'top-[-490px]'
            }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold ">
              <Link
                to={link.link}
                className="text-red-500 hover:text-red-700 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}