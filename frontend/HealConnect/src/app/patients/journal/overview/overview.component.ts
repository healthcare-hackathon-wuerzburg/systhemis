import { Component } from '@angular/core';
import {JournalService} from "../../../services/journal.service";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatAnchor, MatButton, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import { JournalEntry } from '../../../shared/models/journal-entry';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    NgForOf,
    MatAnchor,
    MatIcon,
    RouterLink,
    NgIf,
    MatButton,
    DatePipe,
    MatIconButton,
    MatIconAnchor,
    MatCardSubtitle
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  entries: JournalEntry[] = [];

  constructor(private journalService: JournalService) {
    this.entries = this.journalService.getAllJournalEntriesForUser();
  }

  buildDateLabel(date: Date) {
    return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'numeric' });
  }
}
