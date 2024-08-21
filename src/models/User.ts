import Doacoes from "./Donations";

export default interface Usuario {
    id: number;
    nome: string
    usuario: string;
    senha: string;
    foto: string;
    doacao?: Doacoes[] | null;

} 