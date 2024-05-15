import { IDepoimento } from "./IDepoimento.model";

export interface ICurso {
  id: string;
  nome: string;
  titulacao?: string;
  modalidade?: string;
  duracao?: string;
  periodo?: string;
  area?: string;
  oCurso?: string[];
  voceComoProfissional?: string[];
  seuFuturo?: string[];
  telefone?: string;
  email?: string;
  imagem?: string;
  depoimento?: IDepoimento;
}
