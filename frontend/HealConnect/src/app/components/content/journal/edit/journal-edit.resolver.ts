import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {JournalEntry} from "../../../shared/models/journal-entry";
import {JournalService} from "../../../../services/journal.service";
import {inject} from "@angular/core";

export const journalEditResolver: ResolveFn<JournalEntry> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): JournalEntry => {
  return inject(JournalService).getJournalEntryByDate(new Date());
}
