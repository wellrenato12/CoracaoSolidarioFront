import Doacoes from "../../../models/Donations"

interface CardDonationProps {
    doacao: Doacoes
}

function CardDonation({doacao}: CardDonationProps) {


  return ( 
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between size-52">
        <div className="flex flex-col w-full bg-rose-400 py-2 px-4 items-center gap-1">
            <h2 className="text-white">Valor da doação: </h2>
            <h1 className="text-white font-bold text-5xl">R$ {doacao.valor}</h1>
        </div>
            <p>{doacao.descricao}</p>
    </div>
  )
}

export default CardDonation