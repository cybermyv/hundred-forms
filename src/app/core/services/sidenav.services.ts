import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenavStateSubject = new Subject<boolean>();
  public sidenavState$ = this.sidenavStateSubject.asObservable();

  setSidenavState(state: boolean): void {
    this.sidenavStateSubject.next(state);
  }
}