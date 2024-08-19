import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HandHeart } from "@phosphor-icons/react";

export function Donate() {
  const navigate = useNavigate()
  const { isLoading, usuario } = useContext(AuthContext)

  const isLogin = usuario.token === ""

  useEffect(() => {
    if (isLogin) {
      navigate('/login')
    }
  }, [isLogin, navigate])

  return (
    <div className="flex flex-col items-center  w-[340px]  md:w-[450px]   bg-white py-6 my-12 mx-auto rounded-3xl shadow-custom">
      <h1 className="text-[23px] md:text-[25px] font-bold border-b-8 pb-1 border-b-[#F43F5E] rounded-lg">Faça sua doação</h1>

      <form className="mt-[40px] space-y-6 flex flex-col items-center">
        <div className="flex flex-col gap-1">
          <label htmlFor="valor" className="text-[16px] md:text-[18px] font-bold">Digite um valor:</label>
          <input className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl"
            type="number"
            id="valor"
            name="valor"
            min={0}
            placeholder="Valor da doação"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="categoria" className="text-[16px] md:text-[18px] font-bold">Categoria da doação:</label>
          <select id="categoria" name="categoria" className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl">
            <option value="Causa" title="Doação para qualquer causa">Doe pela causa</option>
            <option value="Roupas" title="Doação de vestuário para todas as idades.">Roupas</option>
            <option value="Alimentos" title="Cestas básicas e alimentos não perecíveis.">Alimentos</option>
            <option value="Materiais Escolares" title="Cadernos, lápis, mochilas e outros itens escolares.">Materiais Escolares</option>
            <option value="Higiene Pessoal" title="Produtos como sabonetes, escovas de dente e absorventes.">Higiene Pessoal</option>
            <option value="Móveis e Eletrodomésticos" title="Móveis usados e pequenos eletrodomésticos em bom estado.">Móveis e Eletrodomésticos</option>
            <option value="Livros" title="Literatura e materiais educativos para todas as idades.">Livros</option>
            <option value="Cobertores" title="Roupas de cama e cobertores para ajudar no inverno.">Cobertores</option>
            <option value="Produtos de Limpeza" title="Itens para manter a higiene e a organização do lar.">Produtos de limpeza</option>
            <option value="Outros" title="Outros">Outros</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="estado" className="text-[16px] md:text-[18px] font-bold">Destino:</label>
          <select id="estado" name="estado" className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl">
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="PR">Paraná</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="PE">Pernambuco</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="descricao" className="text-[16px] md:text-[18px] font-bold">Deixe uma mensagem:</label>
          <textarea
            name="descricao"
            id="descricao"
            maxLength={255}
            className="bg-[#e5e5e5] w-[300px] h-[100px] text-[16px] md:text-[18px] px-2 py-2 rounded-2xl resize-none"
          />
        </div>

        <button type="submit" className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all">
          {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span className="flex items-center gap-3">
              DOAR
              <HandHeart size={28} />
            </span>
          }
        </button>
      </form>
    </div >
  )
}