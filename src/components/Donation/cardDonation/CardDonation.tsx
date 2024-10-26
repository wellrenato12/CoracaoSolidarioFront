import Doacoes from "../../../models/Donations";

interface CardDonationProps {
    doacao: Doacoes;
}

// Função para converter string ISO em objeto Date
function convertToDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr || typeof dateStr !== 'string') {
        console.warn("Data recebida não é uma string válida:", dateStr);
        return null;
    }

    // Truncar frações de segundos para milissegundos
    const truncatedDateStr = dateStr.replace(/(\.\d{3})\d+/, '$1');
    const date = new Date(truncatedDateStr);

    return isNaN(date.getTime()) ? null : date;
}

function CardDonation({ doacao }: CardDonationProps) {
    const valorBRL = doacao.valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    // Convertendo a data
    const formattedDate = convertToDate(doacao.dataDoacao);
    const displayDate = formattedDate ? new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: 'medium'
    }).format(formattedDate) : 'Data inválida';

    console.log(doacao.categoria?.nome)
    console.log(doacao.destino?.nome)

    return (
        <div className="flex flex-col rounded-lg overflow-x-hidden border border-rose-400 w-[250px] shadow-lg hover:scale-105 transition-all">
            <div className="text-white flex flex-col w-full bg-rose-400 py-2 px-4 items-center">
                <h2 className="">Valor da doação:</h2>
                <h1 className="font-bold text-[15px] md:text-[20px] flex flex-wrap justify-center"><span>{valorBRL}</span></h1>
            </div>
            <div className="bg-white text-center p-2 flex flex-col justify-between flex-1">
                <p className="pt-2 font-bold">{doacao.usuario?.nome}</p>
                <p className="pt-2 font-bold">{doacao.categoria?.nome}</p>
                <p className="pt-2 break-words">{doacao.descricao}</p>
                <p className="pt-2 font-semibold italic">{doacao.destino?.nome}</p>
                <p className="pt-2 text-gray-500 text-xs">{displayDate}</p>
            </div>
        </div>
    );
}

export default CardDonation;
