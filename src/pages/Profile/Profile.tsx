/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import CardDonation from "../../components/Donation/cardDonation/CardDonation"
import Doacoes from "../../models/Donations";
import { buscar } from "../../services/Service";


function Profile() {
    const [doacoes, setDoacoes] = useState<Doacoes[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    
    const navigate = useNavigate()
    
    async function buscarPostagens() {
        try {
          await buscar('/doacoes', setDoacoes, {
            headers: {
              Authorization: token,
            },
          });
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('O token expirou, favor logar novamente')
            handleLogout()
          }
        }
      }
    
      useEffect(() => {
        buscarPostagens();
      }, [doacoes.length]);


    useEffect(() => {
        if (usuario.token === "") {
            navigate('/login')
        }
    }, [usuario.token, navigate])

    console.log(doacoes)

  return (
      <div className="flex flex-col items-center max-w-7xl bg-white  py-6 my-12 mx-auto rounded-3xl shadow-custom">
        <div className="flex flex-col gap-10">

            <div className="flex gap-10 justify-between">
                <div className="border-2 rounded-full border-rose-500 w-52 h-52">
                    <img src={usuario.foto} alt={`Foto do perfil de ${usuario.nome}`} />
                </div>
                <div className="text-right">
                    <p>{usuario.nome}</p>
                    <p>{usuario.usuario}</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 border-4 h-96 w-[800px] overflow-scroll py-5">
                {doacoes.map((doacao) => {
                    return (
                        <CardDonation doacao={doacao} />
                    )
                })}
            </div>
        </div>
      </div>
  )
}

export default Profile