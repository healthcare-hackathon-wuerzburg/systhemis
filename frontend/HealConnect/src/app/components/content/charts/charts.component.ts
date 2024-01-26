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
  firstLineChartData: ChartConfiguration<'line'>['data'];
  secondLineChartData: ChartConfiguration<'line'>['data'];
  thirdLineChartData: ChartConfiguration<'line'>['data'];
  fourthLineChartData: ChartConfiguration<'line'>['data'];
  fifthLineChartData: ChartConfiguration<'line'>['data'];
  sixthLineChartData: ChartConfiguration<'line'>['data'];
  seventhLineChartData: ChartConfiguration<'line'>['data'];
  eigthLineChartData: ChartConfiguration<'line'>['data'];
  lineChartLegend = true;
  firstLineChartOptions: ChartOptions<'line'> = {};
  secondLineChartOptions: ChartOptions<'line'> = {};
  thirdLineChartOptions: ChartOptions<'line'> = {};
  fourthLineChartOptions: ChartOptions<'line'> = {};
  fifthLineChartOptions: ChartOptions<'line'> = {};
  sixthLineChartOptions: ChartOptions<'line'> = {};
  seventhLineChartOptions: ChartOptions<'line'> = {};
  eightLineChartOptions: ChartOptions<'line'> = {};

  constructor(private journalService: JournalService) {
    this.setupFirstGraph();
    this.setupSecondGraph();
    this.setupThirdGraph();
    this.setupFourthGraph();
    this.setupFifthGraph();
    this.setupSixthGraph();
    this.setupSeventhGraph();
    this.setupEightGraph();
  }

  private setupFirstGraph() {
    this.firstLineChartOptions = this.setupLineChartOptions('Überblick');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const stateData = entries.map((e) => e.overview.state);
    const physicalActivityData = entries.map((e) => e.overview.physicalActivity);
    this.firstLineChartData = {
      labels: labels,
      datasets: [
        {
          data: stateData,
          label: 'Befinden',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: physicalActivityData,
          label: 'körperliche Aktivität',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupSecondGraph() {
    this.secondLineChartOptions = this.setupLineChartOptions('???');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const nauseaData = entries.map((e) => e.overview.nausea);
    const tiredData = entries.map((e) => e.overview.tired);
    const mentalStressData = entries.map((e) => e.overview.mentalStress);
    const restrictedLivingData = entries.map((e) => e.overview.restrictedLiving);
    this.secondLineChartData = {
      labels: labels,
      datasets: [
        {
          data: nauseaData,
          label: 'Übelkeit',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: tiredData,
          label: 'Müdigkeit',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: mentalStressData,
          label: 'psychische Belastung',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: restrictedLivingData,
          label: 'Einschränkung in der Lebensqualität',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupThirdGraph() {
    this.thirdLineChartOptions = this.setupLineChartOptions('Konsum');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const cigarettesData = entries.map((e) => e.overview.smokedCigarettes);
    const alcoholData = entries.map((e) => e.overview.alcohol);
    this.thirdLineChartData = {
      labels: labels,
      datasets: [
        {
          data: cigarettesData,
          label: 'Zigarettenkonsum',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: alcoholData,
          label: 'Alkoholkonsum',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupFourthGraph() {
    this.fourthLineChartOptions = this.setupLineChartOptions('Gewicht');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const weightData = entries.map((e) => e.overview.weight);
    this.fourthLineChartData = {
      labels: labels,
      datasets: [
        {
          data: weightData,
          label: 'Körpergewicht',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupFifthGraph() {
    this.fifthLineChartOptions = this.setupLineChartOptions('Schmerzen');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const headPainData = entries.map((e) => e.symptoms.pain.headPain);
    const nosePainData = entries.map((e) => e.symptoms.pain.nosePain);
    const mouthPainData = entries.map((e) => e.symptoms.pain.mouthPain);
    const throatPainData = entries.map((e) => e.symptoms.pain.throatPain);
    const neckPainData = entries.map((e) => e.symptoms.pain.neckPain);
    this.fifthLineChartData = {
      labels: labels,
      datasets: [
        {
          data: headPainData,
          label: 'Kopf',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: nosePainData,
          label: 'Nase',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: mouthPainData,
          label: 'Mund',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: throatPainData,
          label: 'Rachen',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: neckPainData,
          label: 'Hals',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupSixthGraph() {
    this.sixthLineChartOptions = this.setupLineChartOptions('Schluckprobleme');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const swallowPainData = entries.map((e) => e.symptoms.swallow.swallowPain);
    const mouthDrynessData = entries.map((e) => e.symptoms.swallow.mouthDrynres);
    const smellTastingIssuesData = entries.map((e) => e.symptoms.swallow.smellTastingIssues);
    const swallowingFoodIssuesData = entries.map((e) => e.symptoms.swallow.swallowingFood);
    const swallowingDrinkIssuesData = entries.map((e) => e.symptoms.swallow.swallowingDrinks);
    const swallowUpIssuesData = entries.map((e) => e.symptoms.swallow.swallowUp);
    const feedingTubeData = entries.map((e) => e.symptoms.swallow.feedingTube);

    this.sixthLineChartData = {
      labels: labels,
      datasets: [
        {
          data: swallowPainData,
          label: 'Schluckschmerz',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: mouthDrynessData,
          label: 'Mundtrockenheit',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: smellTastingIssuesData,
          label: 'Riech-/Schmeckstörung',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: swallowingFoodIssuesData,
          label: 'Problem mit festen Speisen',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: swallowingDrinkIssuesData,
          label: 'Problem mit Flüssigkeiten',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: swallowUpIssuesData,
          label: 'Verschlucken',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: feedingTubeData,
          label: 'künstliche Ernährung (Magensonde)',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupSeventhGraph() {
    this.seventhLineChartOptions = this.setupLineChartOptions('Atem- und Sprechstörung');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const breathlessnessCalmData = entries.map((e) => e.symptoms.breath.breathlessnessCalm);
    const breathlessnessActivityData = entries.map((e) => e.symptoms.breath.breathlessnessActivity);
    const coughingData = entries.map((e) => e.symptoms.breath.coughing);
    const hoarsenessData = entries.map((e) => e.symptoms.breath.hoarseness);
    this.seventhLineChartData = {
      labels: labels,
      datasets: [
        {
          data: breathlessnessCalmData,
          label: 'Luftnot in Ruhe',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: breathlessnessActivityData,
          label: 'Luftnot bei Belastung',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: coughingData,
          label: 'Husten',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: hoarsenessData,
          label: 'Heiserkeit',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupEightGraph() {
    this.eightLineChartOptions = this.setupLineChartOptions('Blutungen');
    const username = localStorage.getItem('username');
    const entries = this.journalService.getLastJournalEntries(username);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const bleedNoseData = entries.map((e) => e.symptoms.bleeding.bleedNose);
    const bleedMouthData = entries.map((e) => e.symptoms.bleeding.bleedMouth);
    const bleedThroatData = entries.map((e) => e.symptoms.bleeding.bleedThroat);
    const bleedDeepData = entries.map((e) => e.symptoms.bleeding.bleedDeep);
    this.eigthLineChartData = {
      labels: labels,
      datasets: [
        {
          data: bleedNoseData,
          label: 'Nase',
          fill: true,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: bleedMouthData,
          label: 'Mund',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: bleedThroatData,
          label: 'obere Atemwege',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        },
        {
          data: bleedDeepData,
          label: 'untere Atemwege',
          fill: true,
          tension: 0,
          borderColor: 'grey',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }

  private setupLineChartOptions(title: string): ChartOptions<'line'> {
    return  {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
        }
      },
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
  }

  private buildDateLabel(date: Date) {
    return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'numeric' });
  }

}
