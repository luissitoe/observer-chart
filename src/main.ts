import { DadosDaPesquisa } from "./subject";
import { GraficoDeBarra, GraficoDeRosca } from "./graficos";

const dados = new DadosDaPesquisa();
const graficoDeBarra = new GraficoDeBarra(
  document.getElementById("graficoBarra") as HTMLCanvasElement
);
const graficoDeRosca = new GraficoDeRosca(
  document.getElementById("graficoRosca") as HTMLCanvasElement
);

dados.attach(graficoDeBarra);
dados.attach(graficoDeRosca);

const entradas = [
  { id: "javascript", chave: "javascript" },
  { id: "python", chave: "python" },
  { id: "java", chave: "java" },
  { id: "php", chave: "php" },
];

entradas.forEach(({ id, chave }) => {
  const input = document.getElementById(id) as HTMLInputElement;

  input.addEventListener("input", () => {
    const valor = parseFloat(input.value);
    dados.update(chave as keyof (typeof dados)["dados"], valor);
  });
});
