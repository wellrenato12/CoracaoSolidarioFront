import Categoria from './Category';
import Usuario from './User';

export default interface Doacoes {
  id: number;
  data_doacao: Date;
  descricao: string;
  destino: string;
  valor: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}