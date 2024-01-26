import {SymptomsEntry} from "./symptoms";

export class JournalEntry {
  overview: {
    entryDate: Date;
    state: number;
    physicalActivity: number;
    nausea: number;
    tired: number;
    mentalStress: number;
    restrictedLiving: number;
    smokedCigarettes: number;
    alcohol: number;
    weight: number;
  };
  symptoms: SymptomsEntry
}
