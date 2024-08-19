import { AuthContext } from "../../contexts/AuthContext";
import { useCallback, useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Categoria from "../../models/Category";
import type Doacoes from "../../models/Donations";
import { buscar, cadastrar } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { HandHeart } from "@phosphor-icons/react";

export function Donate() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [doacao, setDoacao] = useState<Doacoes>({
    id: 0,
    valor: 0,
    descricao: '',
    destino: '',
    data_doacao: '',
    categoria: null,
    usuario: null,
  });

  const { isLoading, usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;
  const isLogin = usuario.token !== "";

  function atualizarDoacao(event: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    if (name === "categoria") {
      const categoriaSelecionada = categorias.find(categoria => categoria.nome === value) || null;
      setDoacao({
        ...doacao,
        categoria: categoriaSelecionada,
      })
    } else if(name === "destino") {
      setDoacao({
        ...doacao,
        destino: value,
      })
    } else {
      setDoacao({
        ...doacao,
        [name]: value,
      });
    }
  }

  async function handleDonate(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await cadastrar(`/doacoes`, doacao, setDoacao, {
        headers: {
          Authorization: token,
        }
      })
      alert("Doação efetuada com sucesso!")
      navigate('/home')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      } else {
        alert('Erro ao cadastrar a Postagem');
      }
    }
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

  useEffect(() => {
    buscarCategorias();
  }, [buscarCategorias]);

  useEffect(() => {
    if (!isLogin) {
      alert("Você precisa estar logado");
      navigate('/login');
    }
  }, [isLogin, navigate]);

  return (
    <div className="flex flex-col items-center w-[340px] md:w-[450px] bg-white py-6 my-12 mx-auto rounded-3xl shadow-custom">
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
            value={doacao.valor || ""}
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl"
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
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl"
          >
            <option value="" disabled>
              Selecione uma categoria
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
          <label htmlFor="estado" className="text-[16px] md:text-[18px] font-bold">
            Destino:
          </label>
          <select
            required
            value={doacao.destino || "SP"}
            onChange={atualizarDoacao}
            id="estado"
            name="destino"
            className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl"
          >
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="PR">Paraná</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="PE">Pernambuco</option>
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
            maxLength={255}
            className="bg-[#e5e5e5] w-[300px] h-[100px] text-[16px] md:text-[18px] px-2 py-2 rounded-2xl resize-none"
            placeholder="Deixe sua mensagem aqui..."
          />
        </div>

        {/* <ConfirmDonate isLoading={isLoading} /> */}
        <button
          type="submit"
          className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all"
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
            <span className="flex items-center gap-3">
              DOAR
              <HandHeart size={28} />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
