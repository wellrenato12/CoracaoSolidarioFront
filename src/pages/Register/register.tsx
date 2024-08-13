import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="flex flex-col items-center w-[600px] bg-white py-16 my-24 mx-auto rounded-3xl shadow-custom">
      <h1 className="text-6xl text-center font-bold border-b-8 pb-5 w-[340px] border-b-[#F43F5E] rounded-lg">Faça o seu cadastro</h1>

      <form className="mt-16 space-y-10 flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <label className="text-4xl font-bold">Seu nome:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" type="email" />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-4xl font-bold">Seu e-mail:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" type="password" />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-4xl font-bold">Sua senha:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" type="password" />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-4xl font-bold">Link da sua foto:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" type="password" />
        </div>

        <button className="w-44 h-16 bg-rose-500 text-2xl font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">
          Criar conta
        </button>

        <span className="text-xl font-bold text-center">
          <p>Já está cadastrado?</p>
          <Link className="text-rose-500 hover:text-red-700 transition-all" to="/register">Acesse aqui!</Link>
        </span>
      </form>
    </div>
  )
}