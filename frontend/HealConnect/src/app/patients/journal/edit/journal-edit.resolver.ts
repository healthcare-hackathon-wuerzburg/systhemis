import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {JournalEntry} from "../../../shared/models/journal-entry";
import {inject} from "@angular/core";
import {JournalService} from "../../../services/journal.service";

export const journalEditResolver: ResolveFn<JournalEntry> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): JournalEntry => {
  if (route.paramMap.has('data')) {
    return inject(JournalService).getJournalEntryByDate(route.paramMap.get('data'));
  }
  return inject(JournalService).getJournalEntryByDate(null);
}
