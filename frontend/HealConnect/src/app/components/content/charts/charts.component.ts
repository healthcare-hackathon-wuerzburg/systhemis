import {Component} from '@angular/core';
import {NgChartsModule} from "ng2-charts";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {JournalService} from "../../../services/journal.service";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  lineChartData: ChartConfiguration<'line'>['data'];

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1
        }
      }
    }
  };
  public lineChartLegend = true;

  constructor(private journalService: JournalService) {
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const data = entries.map((e) => e.overview.state);
    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          label: 'Happiness',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private buildDateLabel(date: Date) {
    return date.toDateString()
  }

}
