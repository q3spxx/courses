import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public inputValue = '';
  @Input() searchTextStream: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
  }
  changeSearchText(): void {
    this.searchTextStream.next(this.inputValue);
  }

}
