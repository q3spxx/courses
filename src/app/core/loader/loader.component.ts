import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  public loading: boolean;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.getLoading().subscribe((value: boolean) => {
      this.loading = value
    });
  }

}
