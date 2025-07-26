import { Injectable, signal, WritableSignal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  sortOption: WritableSignal<string | null> = signal(null);
  searchValue: WritableSignal<string> = signal('');
  categories: WritableSignal<string[]> = signal([]);
  private trigger = new Subject<void>();
  trigger$ = this.trigger.asObservable();

  fire() {
    this.sortOption.set(this.sortOption());
    this.trigger.next();
  }
}
