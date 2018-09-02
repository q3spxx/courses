import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loadingStream = new Subject<boolean>();

  constructor() { }

  getLoading(): Observable<boolean> {
    return this.loadingStream;
  }

  setLoading(value: boolean): void {
    this.loadingStream.next(value);
  }
}
