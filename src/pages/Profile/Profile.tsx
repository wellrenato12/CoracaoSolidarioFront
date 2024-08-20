/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { buscar } from "../../services/Service";
import defaultProfilePic from "../../assets/default-profile-pic.svg";
import type Usuario from "../../models/User";
import CardDonation from "../../components/Donation/cardDonation/CardDonation";

function Profile() {
  const [user, setUser] = useState<Usuario | null>(null);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const navigate = useNavigate();

  async function buscarUsuario() {
    try {
      await buscar(`/usuarios/${id}`, (dados: any) => {
        setUser(dados);
      }, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente');
        handleLogout();
      } else {
        console.error('Erro ao buscar usuário:', error);
      }
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      buscarUsuario();
    }
  }, [id, token]);

  return (
    <div className="flex flex-col items-center w-[370px] md:max-w-7xl bg-white py-6 my-12 mx-auto rounded-3xl shadow-custom">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex gap-10 justify-center md:justify-around items-center">
          <div className="border-2 rounded-full border-rose-500 w-20 md:w-52 md:h-52">
            <img
              src={user?.foto || defaultProfilePic}
              alt={`Foto do perfil de ${user?.nome}`}
              className="rounded-full"
            />
          </div>
          <div className="text-right text-zinc-800">
            <p className="uppercase font-bold text-3xl">{user?.nome}</p>
            <p className="italic">{user?.usuario}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 border-2 rounded-l-2xl h-96 w-[350px] md:w-[800px] overflow-y-scroll py-4 shadow-inner">
          {user?.doacao?.map((doacao) => (
            <CardDonation key={doacao.id} doacao={doacao} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
