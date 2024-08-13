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
    <div className="flex flex-col items-center w-[600px] bg-white py-16 my-24 mx-auto rounded-3xl shadow-custom">
      <h1 className="text-6xl text-center font-bold border-b-8 pb-5 w-[340px] border-b-[#F43F5E] rounded-lg">Faça o seu cadastro</h1>

      <form className="mt-16 space-y-10 flex flex-col items-center" onSubmit= {cadastrarNovoUsuario}>
        <div className="flex flex-col gap-3">
          <label htmlFor="nome" className="text-4xl font-bold">Seu nome:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" 
          type="text"
          id= "nome" 
          name="nome"
          placeholder="Nome"
          value={usuario.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-4xl font-bold">Seu e-mail:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" 
          type="email" 
          id="usuario"
          name="usuario"
          placeholder="E-mail"
          value={usuario.usuario}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="senha" className="text-4xl font-bold">Sua senha:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" 
          type="password"
          id="senha"
          name="senha"
          placeholder="Senha"
          value={usuario.senha}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="confirmarSenha" className="text-4xl font-bold">Confirme sua senha:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" 
          type="password"
          id="confirmarSenha"
          name="confirmarSenha"
          placeholder="Confirmar Senha"
          value={confirmaSenha}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)} 
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="foto" className="text-4xl font-bold">Link da sua foto:</label>
          <input className="bg-zinc-100 w-[400px] h-16 text-3xl px-2 rounded-2xl" 
          type="text"
          id="foto"
          name="foto"
          placeholder="Foto"
          value={usuario.foto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
          />
        </div>

        <button className="w-44 h-16 bg-rose-500 text-2xl font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all" type="submit">
          Criar conta
        </button>

        <span className="text-xl font-bold text-center">
          <p>Já está cadastrado?</p>
          <Link className="text-rose-500 hover:text-red-700 hover:underline transition-all" to="/login">Acesse aqui!</Link>
        </span>
      </form>
    </div>
  )
}