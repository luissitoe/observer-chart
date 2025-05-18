import type { Observer, Dados } from "./observer";

export interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

export class DadosDaPesquisa implements Subject {
  private observers: Observer[] = [];
  private dados: Dados = {
    javascript: 30,
    python: 50,
    java: 40,
    php: 20,
  };

  attach(observer: Observer): void {
    if (!this.observers.includes(observer)) this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  update(chave: keyof Dados, valor: number): void {
    this.dados[chave] = valor;
    this.notify();
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this.dados));
  }
}
