/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthContext } from "../../contexts/AuthContext";
import { useCallback, useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Categoria from "../../models/Category";
import type Doacoes from "../../models/Donations";
import { buscar, cadastrar } from "../../services/Service";
import { ConfirmDonate } from "../../components/Donation/ConfirmDonate/ConfirmDonate";
import { toastAlerta } from "../../util/toastAlerta";
import type Destino from "../../models/Destination";

export function Donate() {
  const navigate = useNavigate();

  const [destinos, setDestinos] = useState<Destino[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [doacao, setDoacao] = useState<Doacoes>({
    id: 0,
    valor: 0,
    descricao: '',
    dataDoacao: '',
    categoria: null,
    destino: null,
    usuario: null,
  });

  const { isLoading, usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;
  const isLogin = usuario.token !== "";
  const isDisabled = doacao.valor <= 0 || doacao.categoria === null || doacao.destino === null || doacao.descricao === '';

  function atualizarDoacao(event: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    if (name === "categoria") {
      const categoriaSelecionada = categorias.find(categoria => categoria.nome === value) || null;
      setDoacao({
        ...doacao,
        categoria: categoriaSelecionada,
      })
    } else if (name === "destino") {
      const destinoSelecionado = destinos.find(destino => destino.nome === value) || null;
      setDoacao({
        ...doacao,
        destino: destinoSelecionado,
      })
    } else {
      setDoacao({
        ...doacao,
        [name]: value,
      });
    }
  }

  async function donate() {
    if (!usuario) {
      toastAlerta('Usuário não autenticado.', 'info');
      return;
    }

    try {
      const doacaoAtualizada = {
        ...doacao,
        usuario: usuario
      };

      await cadastrar(`/doacoes`, doacaoAtualizada, setDoacao, {
        headers: {
          Authorization: token,
        }
      })
      toastAlerta("Doação efetuada com sucesso!", 'sucesso')
      navigate('/home')
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      } else {
        toastAlerta('Erro ao cadastrar a doação', 'erro');
      }
    }
  }

  function handleDonate(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    donate();
  }

  const buscarCategorias = useCallback(async () => {
    try {
      await buscar('/categorias', setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }, [token]);

  const buscarDestinos = useCallback(async () => {
    try {
      await buscar('/destinos', setDestinos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar destinos:", error);
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    buscarDestinos()
  }, [buscarCategorias, buscarDestinos]);

  useEffect(() => {
    if (!isLogin) {
      toastAlerta("Você precisa estar logado", 'info');
      navigate('/login');
    }
  }, [isLogin, navigate]);

  return (
    <div className="flex flex-col items-center w-[340px] md:w-[450px] bg-white py-6 my-12 mx-auto rounded-3xl shadow-custom transition-all duration-300 hover:shadow-lg">
      <h1 className="text-[23px] md:text-[25px] font-bold border-b-8 pb-1 border-b-[#F43F5E] rounded-lg">
        Faça sua doação
      </h1>

      <form
        onSubmit={handleDonate}
        className="mt-[40px] space-y-6 flex flex-col items-center"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="valor" className="text-[16px] md:text-[18px] font-bold">
            Digite um valor:
          </label>
          <input
            required
            onChange={atualizarDoacao}
            value={doacao.valor ?? ''}
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow duration-200"
            type="number"
            id="valor"
            name="valor"
            min={0}
            placeholder="Valor da doação"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="categoria" className="text-[16px] md:text-[18px] font-bold">
            Categoria da doação:
          </label>
          <select
            required
            value={doacao.categoria?.nome || ""}
            onChange={atualizarDoacao}
            id="categoria"
            name="categoria"
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow duration-200"
          >
            <option value="" disabled>
              Selecione uma categoria:
            </option>
            {categorias.map((categoria) => (
              <option
                key={categoria.id}
                value={categoria.nome}
                title={categoria.descricao}
              >
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="destino" className="text-[16px] md:text-[18px] font-bold">
            Destino:
          </label>
          <select
            required
            value={doacao.destino?.nome || ""}
            onChange={atualizarDoacao}
            id="destino"
            name="destino"
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow duration-200"
          >
            <option value="" disabled>
              Selecione um destino:
            </option>
            {destinos.map((destino) => (
              <option
                key={destino.id}
                value={destino.nome}
              >
                {destino.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="descricao" className="text-[16px] md:text-[18px] font-bold">
            Deixe uma mensagem:
          </label>
          <textarea
            required
            value={doacao.descricao || ""}
            onChange={atualizarDoacao}
            name="descricao"
            id="descricao"
            maxLength={70}
            className="bg-[#e5e5e5] w-[300px] h-[100px] text-[16px] md:text-[18px] px-2 py-2 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow duration-200"
            placeholder="Deixe sua mensagem aqui..."
          />
        </div>

        <ConfirmDonate
          isLoading={isLoading}
          isDisabled={isDisabled}
          donate={donate}
        />
      </form>
    </div>
  );
}
