import {
  Modal as ModalConfig,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { atualizar, buscar, cadastrar, deletar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';
import type Categoria from '../../models/Category';
import { toastAlerta } from '../../util/toastAlerta';
import type Destino from '../../models/Destination';

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  typeOperation: string
}

export function Modal({ onClose, isOpen, typeOperation }: ModalProps) {
  const [isOpenUpdateCategory, setIsOpenUpdateCategory] = useState(false)
  const [isOpenUpdateDestination, setIsOpenUpdateDestination] = useState(false)
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria | null>(null);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  })
  const [destinoSelecionado, setDestinoSelecionado] = useState<Destino | null>(null);
  const [destinos, setDestinos] = useState<Destino[]>([]);
  const [destino, setDestino] = useState<Destino>({
    id: 0,
    nome: '',
  })
  const { usuario } = useContext(AuthContext);

  const token = usuario.token;

  async function getAllCategories() {
    try {
      await buscar(`/categorias`, setCategorias, {
        headers: {
          Authorization: token,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function getAllDestinations() {
    try {
      await buscar(`/destinos`, setDestinos, {
        headers: {
          Authorization: token,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function handleAddNewCategory(event: FormEvent) {
    event.preventDefault()

    if (!categoria) return

    try {
      await cadastrar(`/categorias`, categoria, setCategorias, {
        headers: {
          Authorization: token,
        }
      })
      toastAlerta("Categoria criada com sucesso!", 'sucesso')
      await getAllCategories()
      onClose()
    } catch (error) {
      console.log(error)
    }

    setCategoria({
      id: 0,
      nome: '',
      descricao: ''
    })
  }

  async function handleAddNewDestination(event: FormEvent) {
    event.preventDefault()

    if (!destino) return

    try {
      await cadastrar(`/destinos`, destino, setDestinos, {
        headers: {
          Authorization: token,
        }
      })
      toastAlerta("Destino criada com sucesso!", 'sucesso')
      await getAllDestinations()
      onClose()
    } catch (error) {
      console.log(error)
    }

    setDestino({
      id: 0,
      nome: '',
    })
  }

  async function handleUpdateCategory(event: FormEvent) {
    event.preventDefault();

    if (!categoriaSelecionada) return;

    console.log(categoriaSelecionada)

    try {
      await atualizar(
        `/categorias/${categoriaSelecionada.id}`,
        categoriaSelecionada,
        (updatedCategoria: Categoria) => {
          setCategorias((prevCategorias) =>
            prevCategorias.map((categoria) =>
              categoria.id === updatedCategoria.id ? updatedCategoria : categoria
            )
          );
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toastAlerta("Categoria atualizada com sucesso!", "sucesso");
      setIsOpenUpdateCategory(false);
      setCategoriaSelecionada(null);
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar a categoria", error);
      toastAlerta("Erro ao atualizar a categoria", "erro");
    }
  }

  async function handleUpdateDestination(event: FormEvent) {
    event.preventDefault();

    if (!destinoSelecionado) return;

    console.log(destinoSelecionado)

    try {
      await atualizar(
        `/destinos/${destinoSelecionado.id}`,
        destinoSelecionado,
        (updatedDestino: Destino) => {
          setDestinos((prevDestinos) =>
            prevDestinos.map((destino) =>
              destino.id === updatedDestino.id ? updatedDestino : destino
            )
          );
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toastAlerta("Destino atualizado com sucesso!", "sucesso");
      setIsOpenUpdateDestination(false);
      setDestinoSelecionado(null);
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar o destino", error);
      toastAlerta("Erro ao atualizar o destino", "erro");
    }
  }

  function handleOpenEditModal(categoria: Categoria) {
    setCategoriaSelecionada(categoria);
    setIsOpenUpdateCategory(true);
  }

  function handleOpenEditModalDestination(destino: Destino) {
    setDestinoSelecionado(destino);
    setIsOpenUpdateDestination(true);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setCategoria((prev) => ({ ...prev, [name]: value }))
  }

  function handleChangeDestination(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setDestino((prev) => ({ ...prev, [name]: value }))
  }

  function handleChangeUpdate(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setCategoriaSelecionada((prev) => prev ? { ...prev, [name]: value } : null);
  }

  function handleChangeUpdateDestination(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDestinoSelecionado((prev) => prev ? { ...prev, [name]: value } : null);
  }

  async function handleDeleteCategory(id: number) {
    const categoryFromDelete = categorias.find((categoria) => categoria.id === id)

    try {
      await deletar(`/categorias/${categoryFromDelete?.id}`, {
        headers: {
          Authorization: token,
        },
      })
      toastAlerta("Categoria deletada com sucesso!", 'sucesso')
      getAllCategories()
    } catch (error) {
      console.log(error)
      toastAlerta("Erro ao deletar a categoria", "erro");
    }
  }

  async function handleDeleteDestination(id: number) {
    const destinationFromDelete = destinos.find((destino) => destino.id === id)

    try {
      await deletar(`/destinos/${destinationFromDelete?.id}`, {
        headers: {
          Authorization: token,
        },
      })
      toastAlerta("Destino deletado com sucesso!", 'sucesso')
      getAllDestinations()
    } catch (error) {
      console.log(error)
      toastAlerta("Erro ao deletar o destino", "erro");
    }
  }

  useEffect(() => {
    getAllCategories()
    getAllDestinations()
  }, [])

  return (
    <ModalConfig
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{typeOperation}</ModalHeader>
        <ModalCloseButton />
        {typeOperation === 'Adicionar categoria' && (
          <form onSubmit={handleAddNewCategory} className='flex flex-col gap-4'>
            <ModalBody className='flex flex-col gap-2' pb={6}>
              <input
                name="nome"
                placeholder="Nome da categoria"
                value={categoria.nome}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full"
              />
              <input
                name="descricao"
                placeholder="Descrição da categoria"
                value={categoria.descricao}
                onChange={handleChange}
                className="border rounded px-4 py-2 w-full"
              />
            </ModalBody>

            <ModalFooter className="flex gap-4">
              <button type='submit' className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all w-28">
                Adicionar
              </button>
              <button type='button' className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all w-28" onClick={onClose}>Cancelar</button>
            </ModalFooter>
          </form>
        )}
        {typeOperation === 'Editar categoria' && (
          <ModalBody pb={6}>
            {!isOpenUpdateCategory ? (
              categorias.length > 0 ? (
                <div className="overflow-y-scroll max-h-40 px-2">
                  {categorias.map((categoria) => (
                    <div key={categoria.id} className="flex justify-between items-center my-2">
                      <p>{categoria.nome}</p>
                      <button
                        className="bg-rose-500 px-2 py-1 rounded text-white hover:bg-rose-600 transition-all"
                        onClick={() => handleOpenEditModal(categoria)}
                      >
                        Editar
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Nenhuma categoria encontrada.</p>
              )
            ) : (
              <form onSubmit={handleUpdateCategory} className="flex flex-col gap-4 mt-4">
                <ModalBody className='flex flex-col gap-2' pb={6}>
                  <input
                    name="nome"
                    placeholder="Nome da categoria"
                    value={categoriaSelecionada?.nome || ''}
                    onChange={handleChangeUpdate}
                    className="border rounded px-4 py-2 w-full"
                  />
                  <textarea
                    maxLength={128}
                    name="descricao"
                    placeholder="Descrição da categoria"
                    value={categoriaSelecionada?.descricao || ''}
                    onChange={handleChangeUpdate}
                    className="border rounded px-4 py-2 w-full"
                  />
                </ModalBody>

                <ModalFooter className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-rose-500 py-2 px-4 rounded text-white hover:bg-rose-600 transition-all w-28"
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="bg-rose-500 py-2 px-4 rounded text-white hover:bg-rose-600 transition-all w-28"
                    onClick={() => {
                      setIsOpenUpdateCategory(false)
                      setCategoriaSelecionada(null)
                    }}
                  >
                    Cancelar
                  </button>
                </ModalFooter>
              </form>
            )}
          </ModalBody>
        )}
        {typeOperation === 'Remover categoria' && (
          <ModalBody pb={6}>
            <div className="overflow-y-scroll max-h-40 px-2 flex flex-col gap-2">
              {categorias.map((categoria) => (
                <div key={categoria.id} className="flex justify-between items-center gap-4">
                  <p>{categoria.nome}</p>
                  <button
                    className="bg-rose-500 px-2 py-1 rounded text-white hover:bg-rose-600 transition-all"
                    onClick={() => handleDeleteCategory(categoria.id)}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          </ModalBody>
        )}
        {typeOperation === 'Visualizar categorias' && (
          <ModalBody pb={6}>
            <div className="overflow-y-scroll max-h-40 px-2">
              {categorias.map((categoria) => (
                <div key={categoria.id} className="border-red-500 border-2 rounded p-2 mb-2 flex flex-col gap-2">
                  <span>
                    <strong>Nome</strong>
                    <p className='text-xs'>{categoria.nome}</p>
                  </span>
                  <span>
                    <strong className=''>Descrição</strong>
                    <p className='text-xs'>{categoria.descricao}</p>
                  </span>
                </div>
              ))}
            </div>
          </ModalBody>
        )}
        {typeOperation === 'Adicionar destino' && (
          <form onSubmit={handleAddNewDestination} className='flex flex-col gap-4'>
            <ModalBody className='flex flex-col gap-2' pb={6}>
              <input
                name="nome"
                placeholder="Nome do destino"
                value={destino.nome}
                onChange={handleChangeDestination}
                className="border rounded px-4 py-2 w-full"
              />
            </ModalBody>

            <ModalFooter className="flex gap-4">
              <button type='submit' className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all w-28">
                Adicionar
              </button>
              <button type='button' className="bg-rose-500 py-2 px-4 rounded text-gray-100 hover:bg-rose-600 transition-all w-28" onClick={onClose}>Cancel</button>
            </ModalFooter>
          </form>
        )}
        {typeOperation === 'Editar destino' && (
          <ModalBody pb={6}>
            {!isOpenUpdateDestination ? (
              destinos.length > 0 ? (
                <div className="overflow-y-scroll max-h-40 px-2">
                  {destinos.map((destino) => (
                    <div key={destino.id} className="flex justify-between items-center my-2">
                      <p>{destino.nome}</p>
                      <button
                        className="bg-rose-500 px-2 py-1 rounded text-white hover:bg-rose-600 transition-all"
                        onClick={() => handleOpenEditModalDestination(destino)}
                      >
                        Editar
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Nenhum destino encontrada.</p>
              )
            ) : (
              <form onSubmit={handleUpdateDestination} className="flex flex-col gap-4 mt-4">
                <ModalBody className='flex flex-col gap-2' pb={6}>
                  <input
                    name="nome"
                    placeholder="Nome do destino"
                    value={destinoSelecionado?.nome || ''}
                    onChange={handleChangeUpdateDestination}
                    className="border rounded px-4 py-2 w-full"
                  />
                </ModalBody>

                <ModalFooter className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-rose-500 py-2 px-4 rounded text-white hover:bg-rose-600 transition-all w-28"
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="bg-rose-500 py-2 px-4 rounded text-white hover:bg-rose-600 transition-all w-28"
                    onClick={() => {
                      setIsOpenUpdateDestination(false)
                      setDestinoSelecionado(null)
                    }}
                  >
                    Cancelar
                  </button>
                </ModalFooter>
              </form>
            )}
          </ModalBody>
        )}
        {typeOperation === 'Remover destino' && (
          <ModalBody pb={6}>
            <div className="overflow-y-scroll max-h-40 px-2 flex flex-col gap-2">
              {destinos.map((destino) => (
                <div key={destino.id} className="flex justify-between items-center gap-4">
                  <p>{destino.nome}</p>
                  <button
                    className="bg-rose-500 px-2 py-1 rounded text-white hover:bg-rose-600 transition-all"
                    onClick={() => handleDeleteDestination(destino.id)}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          </ModalBody>
        )}
        {typeOperation === 'Visualizar destinos' && (
          <ModalBody pb={6}>
            <div className="overflow-y-scroll max-h-40 px-2">
              {destinos.map((destino) => (
                <div key={destino.id} className="border-red-500 border-2 rounded p-2 mb-2 flex flex-col gap-2">
                  <strong>Nome</strong>
                  <p className='text-xs'>{destino.nome}</p>
                </div>
              ))}
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </ModalConfig>
  )
}