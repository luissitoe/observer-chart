import { Chart } from "chart.js/auto";
import type { Observer, Dados } from "./observer";

export class GraficoDeBarra implements Observer {
  private chart: Chart;

  constructor(ctx: HTMLCanvasElement) {
    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["JavaScript", "Python", "Java", "PHP"],
        datasets: [
          {
            label: "Linguagem de Programação Preferida",
            maxBarThickness: 30,
            data: [30, 50, 40, 20],
            backgroundColor: "#0046f8",
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: "x",
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  update(dados: Dados): void {
    this.chart.data.datasets[0].data = [
      dados.javascript,
      dados.python,
      dados.java,
      dados.php,
    ];
    this.chart.update();
  }
}

export class GraficoDeRosca implements Observer {
  private chart: Chart;

  constructor(ctx: HTMLCanvasElement) {
    this.chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["JavaScript", "Python", "Java", "PHP"],
        datasets: [
          {
            label: "Distribuição dos Dados",
            data: [30, 50, 40, 20],
            backgroundColor: ["#3163e3", "#769afa", "#b4c6f5", "#eceff7"],
            hoverOffset: 20,
          },
        ],
      },
    });
  }

  update(dados: Dados): void {
    this.chart.data.datasets[0].data = [
      dados.javascript,
      dados.python,
      dados.java,
      dados.php,
    ];
    this.chart.update();
  }
}
