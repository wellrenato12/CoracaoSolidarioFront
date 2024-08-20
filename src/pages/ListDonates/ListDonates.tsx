/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react"
import type Doacoes from "../../models/Donations"
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import CardDonation from "../../components/Donation/cardDonation/CardDonation";
import { useNavigate } from "react-router-dom";

export function ListDonates() {
  const [doacoes, setDoacoes] = useState<Doacoes[]>([])

  const navigate = useNavigate()

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const isLogin = usuario.token !== "";

  async function buscarDoacoes() {
    try {
      await buscar('/doacoes', setDoacoes, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscarDoacoes();
  }, [doacoes.length]);

  useEffect(() => {
    if (!isLogin) {
      alert("Você precisa estar logado");
      navigate('/login');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-12">Lista de doações:</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto justify-items-center gap-8 my-12">
        {doacoes.map((doacao) => {
          return <CardDonation key={doacao.id} doacao={doacao} />
        })}
      </div>
    </>
  )
}