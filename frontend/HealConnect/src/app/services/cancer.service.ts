import { Injectable } from '@angular/core';
import { CancerSituation, CancerType } from './cancer.model';

@Injectable({
  providedIn: 'root'
})
export class CancerService {

  private cancerTypes: CancerType[] = [
    {
      patientText: 'Nase/Nasennebenhöhlen',
      docterText: 'Sinunasales Karzinom',
      id: 1
    },
    {
      patientText: 'Mundhöhle',
      docterText: 'Mundhöhlenkarzinom',
      id: 2
    },
    {
      patientText: 'Rachen',
      docterText: 'Pharynxkarzinom',
      id: 3
    },
    {
      patientText: 'Kehlkopf',
      docterText: 'Laryxnkarzinom',
      id: 4
    },
    {
      patientText: 'Speicheldrüsen',
      docterText: 'Speicheldrüsenkarzinom',
      id: 5
    },
    {
      patientText: 'Krebs mit unbekanntem Ursprung (CUP)',
      docterText: 'CUP',
      id: 6
    },
    {
      patientText: 'Ich bin mir nicht sicher.',
      docterText: 'Tumorlokalisation unbekannt',
      id: 7
    }
  ];

  private cancerSituation: CancerSituation[] = [
    {
      patientText: 'Mein Krebs wurde kürzlich festgestellt und wird aktuell oder bald behandelt.',
      docterText: 'Erstdiagnose',
      id: 1
    },
    {
      patientText: 'Mein Krebs wurde erfolgreich behandelt und ich bin in der Nachsorge.',
      docterText: 'Nachsorge',
      id: 2
    },
    {
      patientText: 'Mein Krebs ist wiedergekehrt bzw. hat gestreut und wird ggf. erneut behandelt. ',
      docterText: 'Rezidiv',
      id: 3
    }
  ];

  constructor() { }

  getCancerTypes(): CancerType[] {
    return this.cancerTypes;
  }

  getPatientCancerTypeText(id: number): string | undefined {
    return this.cancerTypes.find(entry => entry.id === id)?.patientText;
  }

  getDoctorCancerTypeText(id: number) {
    return this.cancerTypes.find(entry => entry.id === id)?.docterText;
  }

  getCancerSituations(): CancerSituation[] {
    return this.cancerSituation;
  }

  getPatientCancerSituationText(id: number) {
    return this.cancerSituation.find(entry => entry.id === id)?.patientText;
  }

  getDoctorCancerSituationText(id: number) {
    return this.cancerSituation.find(entry => entry.id === id)?.docterText;
  }
}
