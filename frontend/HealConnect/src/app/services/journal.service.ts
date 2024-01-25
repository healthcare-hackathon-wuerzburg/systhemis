import {Injectable} from "@angular/core";
import {JournalEntry} from "../components/shared/models/journal-entry";


@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private journalEntriesMap: Map<string, JournalEntry> = new Map();

  addJournalEntry(journalEntry: JournalEntry): void {
    const username = localStorage.getItem('username');
    const entryIdentifier = username + '+' + journalEntry.overview.entryDate.getTime();
    this.journalEntriesMap.set(entryIdentifier, journalEntry);
  }
}
