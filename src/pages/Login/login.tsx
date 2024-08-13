import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UserLogin";
import { AuthContext } from "../../contexts/AuthContext";

export function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const {usuario, handleLogin} = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <div className="flex flex-col items-center w-[600px] bg-white py-16 my-24 mx-auto rounded-3xl shadow-custom">
      <h1 className="text-6xl font-bold border-b-8 pb-5 border-b-[#F43F5E] rounded-lg">Faça seu login</h1>

      <form className="mt-16 space-y-10 flex flex-col items-center" onSubmit={login}>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-4xl font-bold">Seu e-mail:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" 
          type="email"
          id="usuario"
          name="usuario"
          placeholder="E-mail"
          value={usuarioLogin.usuario}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="senha" className="text-4xl font-bold">Sua senha:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" 
          type="password"
          id="senha" 
          name="senha"
          placeholder="Senha"
          value={usuarioLogin.senha}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
        </div>

        <button className="w-44 h-16 bg-rose-500 text-2xl font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all" type="submit">
          ENTRAR
        </button>

        <span className="text-center text-xl font-bold">
          <p>Ainda não tem um cadastro?</p>
          <Link className="text-rose-500 hover:text-red-700 hover:underline transition-all" to="/register">Cadastre-se aqui!</Link>
        </span>
      </form>
    </div>
  )
}