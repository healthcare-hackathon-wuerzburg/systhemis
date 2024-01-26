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

  getLastJournalEntries(username: string | null): JournalEntry[] {
    const entries: JournalEntry[] = [];
    if(!username) {
      return entries;
    }

    for (const key of this.journalEntriesMap.keys()) {
      if (key.startsWith(username)) {
        entries.push(this.journalEntriesMap.get(key)!);
      }
    }
    return entries.sort((a, b) => a.overview.entryDate.getTime() - b.overview.entryDate.getTime()).slice(entries.length - 7);
  }
}
