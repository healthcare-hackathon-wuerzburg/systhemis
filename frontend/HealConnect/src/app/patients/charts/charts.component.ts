import {Component} from '@angular/core';
import {NgChartsModule} from "ng2-charts";
import {ChartConfiguration, ChartOptions} from "chart.js";
import { JournalEntry } from '../../shared/models/journal-entry';
import { JournalService } from '../../services/journal.service';
import {MatAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgChartsModule, MatAnchor, MatIcon, RouterLink],
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
  eightLineChartData: ChartConfiguration<'line'>['data'];
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
    const entries = this.journalService.getLastJournalEntries();
    this.setupFirstGraph(entries);
    this.setupSecondGraph(entries);
    this.setupThirdGraph(entries);
    this.setupFourthGraph(entries);
    this.setupFifthGraph(entries);
    this.setupSixthGraph(entries);
    this.setupSeventhGraph(entries);
    this.setupEightGraph(entries);
  }

  private setupFirstGraph(entries: JournalEntry[]) {
    this.firstLineChartOptions = this.setupLineChartOptions('Allgemeines', true);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const stateData = entries.map((e) => e.overview.state);
    const physicalActivityData = entries.map((e) => e.overview.physicalActivity);
    this.firstLineChartData = {
      labels: labels,
      datasets: [
        {
          data: stateData,
          label: 'Befinden',
          tension: 0,
        },
        {
          data: physicalActivityData,
          label: 'körperliche Aktivität',
          tension: 0,
        }
      ]
    };
  }

  private setupSecondGraph(entries: JournalEntry[]) {
    this.secondLineChartOptions = this.setupLineChartOptions(null, true);
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
          tension: 0,
        },
        {
          data: tiredData,
          label: 'Müdigkeit',
          tension: 0,
        },
        {
          data: mentalStressData,
          label: 'psychische Belastung',
          tension: 0,
        },
        {
          data: restrictedLivingData,
          label: 'Einschränkung in der Lebensqualität',
          tension: 0,
        }
      ]
    };
  }

  private setupThirdGraph(entries: JournalEntry[]) {
    this.thirdLineChartOptions = this.setupLineChartOptions(null, false);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const cigarettesData = entries.map((e) => e.overview.smokedCigarettes);
    const alcoholData = entries.map((e) => e.overview.alcohol);
    this.thirdLineChartData = {
      labels: labels,
      datasets: [
        {
          data: cigarettesData,
          label: 'Zigarettenkonsum',
          tension: 0,
        },
        {
          data: alcoholData,
          label: 'Alkoholkonsum',
          tension: 0,
        }
      ]
    };
  }

  private setupFourthGraph(entries: JournalEntry[]) {
    this.fourthLineChartOptions = this.setupLineChartOptions(null, false);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const weightData = entries.map((e) => e.overview.weight);
    this.fourthLineChartData = {
      labels: labels,
      datasets: [
        {
          data: weightData,
          label: 'Körpergewicht',
          tension: 0,
        }
      ]
    };
  }

  private setupFifthGraph(entries: JournalEntry[]) {
    this.fifthLineChartOptions = this.setupLineChartOptions('Schmerzen', true);
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
          tension: 0,
        },
        {
          data: nosePainData,
          label: 'Nase',
          tension: 0,
        },
        {
          data: mouthPainData,
          label: 'Mund',
          tension: 0,
        },
        {
          data: throatPainData,
          label: 'Rachen',
          tension: 0,
        },
        {
          data: neckPainData,
          label: 'Hals',
          tension: 0,
        }
      ]
    };
  }

  private setupSixthGraph(entries: JournalEntry[]) {
    this.sixthLineChartOptions = this.setupLineChartOptions('Schluckprobleme', true);
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
          tension: 0,
        },
        {
          data: mouthDrynessData,
          label: 'Mundtrockenheit',
          tension: 0,
        },
        {
          data: smellTastingIssuesData,
          label: 'Riech-/Schmeckstörung',
          tension: 0,
        },
        {
          data: swallowingFoodIssuesData,
          label: 'Problem mit festen Speisen',
          tension: 0,
        },
        {
          data: swallowingDrinkIssuesData,
          label: 'Problem mit Flüssigkeiten',
          tension: 0,
        },
        {
          data: swallowUpIssuesData,
          label: 'Verschlucken',
          tension: 0,
        },
        {
          data: feedingTubeData,
          label: 'künstliche Ernährung (Magensonde)',
          tension: 0,
        }
      ]
    };
  }

  private setupSeventhGraph(entries: JournalEntry[]) {
    this.seventhLineChartOptions = this.setupLineChartOptions('Atem- und Sprechstörung', true);
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
          tension: 0,
        },
        {
          data: breathlessnessActivityData,
          label: 'Luftnot bei Belastung',
          tension: 0,
        },
        {
          data: coughingData,
          label: 'Husten',
          tension: 0,
        },
        {
          data: hoarsenessData,
          label: 'Heiserkeit',
          tension: 0,
        }
      ]
    };
  }

  private setupEightGraph(entries: JournalEntry[]) {
    this.eightLineChartOptions = this.setupLineChartOptions('Blutungen', true);
    const labels = entries.map((e) => this.buildDateLabel(e.overview.entryDate));
    const bleedNoseData = entries.map((e) => e.symptoms.bleeding.bleedNose);
    const bleedMouthData = entries.map((e) => e.symptoms.bleeding.bleedMouth);
    const bleedThroatData = entries.map((e) => e.symptoms.bleeding.bleedThroat);
    const bleedDeepData = entries.map((e) => e.symptoms.bleeding.bleedDeep);
    this.eightLineChartData = {
      labels: labels,
      datasets: [
        {
          data: bleedNoseData,
          label: 'Nase',
          tension: 0,
        },
        {
          data: bleedMouthData,
          label: 'Mund',
          tension: 0,
        },
        {
          data: bleedThroatData,
          label: 'obere Atemwege',
          tension: 0,
        },
        {
          data: bleedDeepData,
          label: 'untere Atemwege',
          tension: 0,
        }
      ]
    };
  }

  private setupLineChartOptions(title: string | null, limitedYAxis: boolean): ChartOptions<'line'> {
    if (limitedYAxis) {
      return  {
        responsive: true,
        plugins: {
          title: {
            display: !!title,
            text: title ? title : '',
          }
        },
        maintainAspectRatio: true,
        scales: {
          y: {
            min: 1,
            max: 10,
            ticks: {
              stepSize: 1
            }
          }
        }
      };
    } else {
      return  {
        responsive: true,
        plugins: {
          title: {
            display: !!title,
            text: title ? title : '',
          }
        },
        maintainAspectRatio: true,
        scales: {
          y: {
            ticks: {
              stepSize: 1
            }
          }
        }
      };
    }
  }

  private buildDateLabel(date: Date) {
    return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'numeric' });
  }

}
