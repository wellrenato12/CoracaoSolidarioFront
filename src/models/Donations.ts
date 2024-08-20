import Categoria from './Category';
import Usuario from './User';

export default interface Doacoes {
  id: number;
  dataDoacao: string;
  descricao: string;
  destino: string;
  valor: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}