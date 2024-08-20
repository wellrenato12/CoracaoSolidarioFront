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
    // Convertendo a data
    const formattedDate = convertToDate(doacao.dataDoacao);
    const displayDate = formattedDate ? new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: 'medium'
    }).format(formattedDate) : 'Data inválida';

    return (
        <div className="flex flex-col rounded-lg overflow-hidden border border-rose-400 justify-between w-[150px] md:w-52 shadow-lg hover:scale-110 transition-all">
            <div className="text-white flex flex-col w-full bg-rose-400 py-2 px-4 items-center">
                <h2 className="">Valor da doação:</h2>
                <h1 className="font-bold text-[15px] md:text-[30px]">R$ {doacao.valor.toFixed(2)}</h1>
            </div>
            <div className="bg-white text-center p-2">
                <p className="pt-2 font-bold text-lg">{doacao.usuario?.nome}</p>
                <p className="pt-2">{doacao.descricao}</p>
                <p className="pt-2 font-semibold italic">{doacao.destino}</p>
                <p className="pt-2 text-gray-500">{displayDate}</p>
            </div>
        </div>
    );
}

export default CardDonation;
