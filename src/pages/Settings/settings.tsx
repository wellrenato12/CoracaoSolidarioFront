import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useDisclosure } from "@chakra-ui/react"
import { Modal } from "../../components/Modal/Modal"
import { toastAlerta } from "../../util/toastAlerta"
import { useNavigate } from "react-router-dom"

export function Settings() {
  const { getUsers, users, usuario } = useContext(AuthContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [typeOperation, setTypeOperation] = useState('')
  const navigate = useNavigate()
  const isLogin = usuario.token !== "";

  useEffect(() => {
    if (!isLogin) {
      toastAlerta("Você precisa estar logado", 'info');
      navigate('/login');
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenModal = (operation: string) => {
    setTypeOperation(operation)
    onOpen()
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="space-y-24 my-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl underline">Categorias</h2>

          <div className="flex flex-col  gap-4">
            <button onClick={() => handleOpenModal('Adicionar categoria')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Adicionar categoria</button>
            <button onClick={() => handleOpenModal('Editar categoria')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Editar categoria</button>
            <button onClick={() => handleOpenModal('Remover categoria')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Remover categoria</button>
            <button onClick={() => handleOpenModal('Visualizar categorias')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Visualizar categorias</button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl underline">Destinos</h2>

          <div className="flex flex-col  gap-4">
            <button onClick={() => handleOpenModal('Adicionar destino')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Adicionar destino</button>
            <button onClick={() => handleOpenModal('Editar destino')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Editar destino</button>
            <button onClick={() => handleOpenModal('Remover destino')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Remover destino</button>
            <button onClick={() => handleOpenModal('Visualizar destinos')} className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all">Visualizar destinos</button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-3xl underline">Lista de usuários ativos</h2>
          <div>
            {users.map((user) => {
              return (
                <div className="flex gap-2">
                  <p key={user.id}>{user.nome}</p>
                  <hr className="border-[1px] border-rose-500 h-5" />
                  <p>{user.usuario}</p>
                </div>
              )
            })}
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={onClose} typeOperation={typeOperation} />
      </div>
    </div>
  )
}