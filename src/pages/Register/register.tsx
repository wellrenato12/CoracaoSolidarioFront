import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/User";
import { cadastrarUsuario } from "../../services/Service";

export function Register() {
  const navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <div className="flex flex-col items-center w-[650px] bg-white py-6 my-[50px] mx-auto rounded-3xl shadow-custom">
    <h1 className="text-[25px] font-bold border-b-8 pb-1 border-b-[#F43F5E] rounded-lg">Faça o seu cadastro</h1>

      <form className="mt-[40px] space-y-6 flex flex-col items-center" onSubmit={cadastrarNovoUsuario}>
        <div className="flex flex-col gap-6 md:flex-row md:gap-6 w-full">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="nome" className="text-[18px] font-bold">Seu nome:</label>
            <input className="bg-[#e5e5e5] w-full h-10 text-[18px] px-2 rounded-2xl" 
              type="text"
              id="nome" 
              name="nome"
              placeholder="Nome"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="email" className="text-[18px] font-bold">Seu e-mail:</label>
            <input className="bg-[#e5e5e5] w-full h-10 text-[18px] px-2 rounded-2xl" 
              type="email" 
              id="email"
              name="email"
              placeholder="E-mail"
              value={usuario.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-6 w-full">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="senha" className="text-[18px] font-bold">Sua senha:</label>
            <input className="bg-[#e5e5e5] w-full h-10 text-[18px] px-2 rounded-2xl" 
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="confirmarSenha" className="text-[18px] font-bold">Confirme sua senha:</label>
            <input className="bg-[#e5e5e5] w-full h-10 text-[18px] px-2 rounded-2xl" 
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)} 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="foto" className="text-[18px] font-bold">Link da sua foto:</label>
          <input className="bg-[#e5e5e5] w-full h-10 text-[18px] px-2 rounded-2xl" 
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
          />
        </div>

        <button className="w-[130px] h-10 bg-rose-500 text-[18px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all" type="submit">
          Criar conta
        </button>

        <hr className="border-slate-800 w-full" />

        <span className="text-[16px] font-bold text-center">
          <p>Já está cadastrado?</p>
          <Link className="text-rose-500 hover:text-red-700 hover:underline transition-all" to="/login">Acesse aqui!</Link>
        </span>
      </form>
  </div>

  )
}