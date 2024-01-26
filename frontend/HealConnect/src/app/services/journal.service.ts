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

  getAllJournalEntriesForUser() {
    const username = localStorage.getItem('username');
    const entries: JournalEntry[] = [];
    if (!username) {
      return entries;
    }

    for (const key of this.journalEntriesMap.keys()) {
      if (key.startsWith(username)) {
        entries.push(this.journalEntriesMap.get(key)!);
      }
    }
    return entries;
  }

  getJournalEntryByDate(date: Date): JournalEntry {
    const username = localStorage.getItem('username');
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const entryIdentifier = username + '+' + currentDate;
    if (this.journalEntriesMap.has(entryIdentifier)) {
      return this.journalEntriesMap.get(entryIdentifier)!;
    }
    return {} as JournalEntry;
  }

  getLastJournalEntries(): JournalEntry[] {
    const entries = this.getAllJournalEntriesForUser();
    return entries.sort(
      (a, b) => a.overview.entryDate.getTime() - b.overview.entryDate.getTime()).slice(entries.length - 7);
  }
}
