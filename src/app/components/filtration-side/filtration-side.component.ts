import { SharedService } from './../../services/shared.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-filtration-side',
  imports: [],
  templateUrl: './filtration-side.component.html',
  styleUrl: './filtration-side.component.css',
})
export class FiltrationSideComponent {
  private readonly sharedService = inject(SharedService);
  @Input() categories: any[] = [];
}
