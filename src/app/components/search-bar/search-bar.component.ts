import { SharedService } from './../../services/shared.service';
import {
  Component,
  inject,
  signal,
  WritableSignal,
  OnInit,
  computed,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, RouterLink],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  private readonly sharedService = inject(SharedService);
  sortOption: WritableSignal<string | null> = signal(null);
  searchValue: WritableSignal<string> = signal('');
  nav = computed(() => this.sharedService.nav());
  ngOnInit(): void {}

  sorting() {
    this.sharedService.sortOption.set(this.sortOption());
    this.sharedService.fire(); // Triggers the event
  }
  search() {
    this.sharedService.searchValue.set(this.searchValue());
    this.sharedService.fire(); // Triggers the event
  }
}
