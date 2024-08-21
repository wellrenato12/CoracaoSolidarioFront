/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { buscar } from "../../services/Service";
import defaultProfilePic from "../../assets/default-profile-pic.svg";
import type Usuario from "../../models/User";
import CardDonation from "../../components/Donation/cardDonation/CardDonation";
import { toastAlerta } from "../../util/toastAlerta";
import noDonationImage from "../../assets/coracaocaixa.png"; // Imagem a ser exibida

function Profile() {
  const [user, setUser] = useState<Usuario | null>(null);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const navigate = useNavigate();

  const isDonate = user?.doacao === undefined || user?.doacao === null || user?.doacao.length === 0;

  async function buscarUsuario() {
    try {
      await buscar(`/usuarios/${id}`, (dados: Usuario) => {
        setUser(dados);
      }, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
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
    <div className="flex flex-col items-center max-w-7xl w-[350px] md:w-full bg-white py-12 my-12 mx-auto rounded-3xl shadow-custom">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-around items-center">
          <div className="border-2 rounded-full border-rose-500 w-20 md:w-52 md:h-52">
            <img
              src={user?.foto || defaultProfilePic}
              alt={`Foto do perfil de ${user?.nome}`}
              className="rounded-full"
            />
          </div>
          <div className="text-center md:text-right text-zinc-800">
            <p className="uppercase font-bold text-xl md:text-[38px]">{user?.nome}</p>
            <p className="italic text-sm md:text-base">{user?.usuario}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 border-2 rounded-l-2xl h-96 w-[320px] md:w-[800px] overflow-y-scroll py-4 shadow-inner">
          {!isDonate ? (
            user?.doacao?.map((doacao) => (
              <CardDonation key={doacao.id} doacao={doacao} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-inner">
              <div className="flex items-center justify-center gap-4 mb-4">
                <img
                  src={noDonationImage}
                  alt="Imagem ilustrativa de ausência de doações"
                  className="w-20 h-20 md:w-32 md:h-32"
                />
                <div className="flex flex-col items-start justify-center">
                  <p className="text-2xl md:text-3xl font-bold text-center text-zinc-800">
                    Ainda não possui nenhuma doação?
                  </p>
                </div>
              </div>
              <Link
                className="inline-block px-8 py-4 text-xl md:text-2xl font-bold text-white bg-rose-500 rounded-full hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors transform -translate-y-10 translate-x-5"
                to="/donate"
              >
                Doe já
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;


