import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {JournalService} from "../../../services/journal.service";
import {inject} from "@angular/core";
import { JournalEntry } from '../../../shared/models/journal-entry';

export const journalEditResolver: ResolveFn<JournalEntry> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): JournalEntry => {
  return inject(JournalService).getJournalEntryByDate(new Date());
}
