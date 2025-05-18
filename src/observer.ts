export type Dados = {
  javascript: number;
  java: number;
  python: number;
  php: number;
};

export interface Observer {
  update(dados: Dados): void;
}
