import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UserLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

export function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex flex-col items-center w-[340px] md:w-[450px] bg-white py-6 my-12 mx-auto rounded-3xl shadow-custom transition-all duration-300 hover:shadow-lg">
      <h1 className="text-[23px] md:text-[25px] font-bold border-b-8 pb-1 border-b-[#F43F5E] rounded-lg">
        Faça seu login
      </h1>

      <form className="mt-[40px] space-y-6 flex flex-col items-center" onSubmit={login}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-[16px] md:text-[18px] font-bold">Seu e-mail:</label>
          <input
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow duration-200"
            type="email"
            id="usuario"
            name="usuario"
            placeholder="E-mail"
            value={usuarioLogin.usuario}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="senha" className="text-[16px] md:text-[18px] font-bold">Sua senha:</label>
          <input
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow duration-200"
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            value={usuarioLogin.senha}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="flex justify-center items-center w-[120px] h-10 bg-rose-500 text-[16px] md:text-[18px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all duration-200"
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>ENTRAR</span>
          )}
        </button>

        <hr className="border-slate-800 w-full" />

        <span className="text-center text-[14px] md:text-[16px] font-bold">
          <p>Ainda não tem um cadastro?</p>
          <Link
            className="text-rose-500 hover:text-red-700 hover:underline transition-all"
            to="/register"
          >
            Cadastre-se aqui!
          </Link>
        </span>
      </form>
    </div>
  );
}
