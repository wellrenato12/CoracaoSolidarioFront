import Categoria from './Category';
import type Destino from './Destination';
import Usuario from './User';

export default interface Doacoes {
  id: number;
  dataDoacao: string;
  descricao: string;
  valor: number;
  categoria: Categoria | null;
  destino: Destino | null;
  usuario: Usuario | null;
}