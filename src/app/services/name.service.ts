import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  firstname = new BehaviorSubject<string>('');
  secondname = new BehaviorSubject<string>('');

  constructor() { }

  public setFirstName(name: string) {
    this.firstname.next(name);
  }

  public getFirstName() {
    return this.firstname.asObservable();
  }

  public setSecondName(name: string) {
    this.secondname.next(name);
  }

  public getSecondName() {
    return this.secondname.asObservable();
  }
}
