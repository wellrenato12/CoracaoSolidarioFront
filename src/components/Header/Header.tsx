import { NavBar } from "../NavBar/NavBar";
import logo from '../../assets/logo.png'
import { Gear, HandHeart, SignOut, User } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";

export function Header() {
  const navigate = useNavigate()
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })
  const componentRender = pageSize.width > 640 ? <NavBar /> : <MenuMobile />

  const { usuario, handleLogout } = useContext(AuthContext)

  const hasAdmin = usuario.usuario === 'root@root.com'

  const isLogin = usuario.token !== ""

  function navigateForLogin() {
    if (isLogin) {
      navigate('/donate')
    } else {
      toastAlerta('Para doar você precisa estar logado!', 'info')
      navigate('/login')
    }
  }

  function navigateForSettings() {
    if (isLogin && hasAdmin) {
      navigate('/settings')
    } else {
      toastAlerta('Você precisa estar logado!', 'info')
      navigate('/login')
    }
  }

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  useEffect(() => {
    const handleSize = () => {
      setPageSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleSize)

    handleSize()

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return (
    <header className="flex justify-around sm:justify-stretch sm:flex-col sm:block max-w-7xl mx-auto mt-12 sm:mt-10 sm:space-y-6 px-4">
      <div className="flex gap-8 sm:gap-0 flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row items-center lg:gap-9">
          <img src={logo} alt="Logo" className="h-20" />
          <span className="flex flex-col items-center gap-1">
            <h1 className="font-montserrat text-xl md:text-3xl text-rose-500 font-extrabold"><strong>Coração Solidário</strong></h1>
            <h3 className="font-montserrat text-xs md:text-sm text-rose-500 italic font-medium">Ponte para o futuro: Juntos por todes</h3>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          {usuario.token ? (
            <div className="flex justify-center gap-6">
              <button className="flex flex-col items-center hover:text-rose-500 hover:scale-110 transition-all" onClick={logout}>
                <SignOut size={32} />
                Sair
              </button>
              <Link className="flex flex-col items-center hover:text-rose-500 hover:scale-110 transition-all" to={`/profile/${usuario.id}`}>
                <User size={32} />
                Perfil
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="w-[130px] h-14 text-[15px] font-medium leading-5 border-2 border-rose-500 rounded-3xl text-rose-500 hover:bg-rose-500 hover:text-rose-50 hover:scale-110 transition-all">
                Acesse sua conta
              </button>
            </Link>
          )}
          {hasAdmin ? (
            <div className="flex gap-4">
              <button
                onClick={navigateForSettings} className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">
                EDITAR
                <Gear size={32} />
              </button>
              <button
                onClick={navigateForLogin} className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">
                DOAR
                <HandHeart size={32} />
              </button>
            </div>
          ) : (
            <button
              onClick={navigateForLogin} className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">
              DOAR
              <HandHeart size={32} />
            </button>
          )}
        </div>
      </div>
      {componentRender}
    </header >
  )
}