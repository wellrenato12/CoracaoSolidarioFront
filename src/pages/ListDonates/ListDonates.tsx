/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef, useState } from "react"
import type Doacoes from "../../models/Donations"
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import CardDonation from "../../components/Donation/cardDonation/CardDonation";
import { useNavigate } from "react-router-dom";
import { toastAlerta } from "../../util/toastAlerta";
import { Hearts, Oval } from "react-loader-spinner";

export function ListDonates() {
  const [doacoes, setDoacoes] = useState<Doacoes[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [valorTotalArrecadado, setValorTotalArrecadado] = useState(0)

  const navigate = useNavigate()
  const hasCheckedLogin = useRef(false);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const isLogin = usuario.token !== "";
  const valorFormatado = valorTotalArrecadado.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function calcularSomaDoacoes() {
    const total = doacoes.reduce((total, doacao) => total + doacao.valor, 0)
    setValorTotalArrecadado(total)
  }

  async function buscarDoacoes() {
    setIsLoading(true)
    try {
      await buscar('/doacoes', setDoacoes, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    calcularSomaDoacoes()
  }, [doacoes])

  useEffect(() => {
    buscarDoacoes();
  }, [doacoes.length]);



  useEffect(() => {
    if (!hasCheckedLogin.current) {
      if (!isLogin) {
        toastAlerta("Você precisa estar logado", 'info');
        navigate('/login');
      }
      hasCheckedLogin.current = true;
    }
  }, [isLogin, navigate]);

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 md:px-8">
      <div className="flex flex-col items-center gap-8 justify-center">
        <h1 className="text-center text-[#c72944] text-[25px] md:text-5xl w-2/3 font-bold border-b-4 p-5 border-[#c72944]">Lista de doações</h1>
        <h2 className='flex flex-col items-center sm:flex-row text-[18px] md:text-2xl font-bold mb-4 text text-rose-500'>
          Total arrecadado:
          <span className="text-emerald-600 ml-4">{isLoading ? (
            <Oval
            visible={true}
            height="35"
            width="35"
            color="#059669"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          ) : (
            valorFormatado
          )}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto justify-items-center gap-8 my-20">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full col-span-2 sm:col-span-3 xl:col-span-4">
            <Hearts
              height="250"
              width="250"
              color="#f43f5e"
              ariaLabel="hearts-loading"
              visible={true}
            />
          </div>
        ) : (
          doacoes.map((doacao) => {
            return <CardDonation key={doacao.id} doacao={doacao} />;
          })
        )}
      </div>
    </div>
  )
}

