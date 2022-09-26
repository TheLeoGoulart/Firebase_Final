import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosService } from './dados.service';
import { AuthService } from '.././shared';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private dados: any;

  constructor(private dadosService: DadosService, public authService: AuthService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      });
  }

  init(): void {
  }

  atualizargrafico(){
    let janeiro = document.querySelector("#janeiro") as HTMLInputElement;
    let fevereiro = document.querySelector("#fevereiro") as HTMLInputElement;
    let marco = document.querySelector("#marco") as HTMLInputElement;
    let abril = document.querySelector("#abril") as HTMLInputElement;
    let maio = document.querySelector("#maio") as HTMLInputElement;
    let junho = document.querySelector("#junho") as HTMLInputElement;
    
    this.dados = [
      ['Janeiro', Number(janeiro.value)],
      ['Fevereiro', Number(fevereiro.value)],
      ['Março', Number(marco.value)],
      ['Abril', Number(abril.value)],
      ['Maio', Number(maio.value)],
      ['Junho', Number(junho.value)],
    ]

    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 300);
    }

    this.obterOpcoes();
    this.exibirGraficos();
  }
   /**
   * Método chamado assim que a API de gráficos é inicializada.
   * Responsável por chamar os métodos geradores dos gráficos.
   * 
   * @return void
   */
  exibirGraficos(): void{
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirDonutChart();
  }

  exibirPieChart(){
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibir3dPieChart(){
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  exibirBarChart(){
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirLineChart(){
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirColumnChart(){
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }
  
  exibirDonutChart(){
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.2;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Cria e retorna o objeto DataTable da API de gráficos,
   * responsável por definir os dados do gráfico.
   * 
   * @return any 
   */

  obterDataTable(): any{
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   *Retorna as opções do gráfico, que incluem o título
   * e tamanho do gráfico.
   * 
   * @return any 
   */

   obterOpcoes(): any{
    let titulo = document.querySelector("#titulo") as HTMLInputElement;
    return {
      'title': titulo.value,
      'width': 400,
      'height': 300
    }
  }

}