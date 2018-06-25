import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  constructor(private http: HttpServiceService  ) {
    this.http.getData().subscribe((data: any) => {
      this.data = data;
    });
  }
  title = 'app';
  data = {
  };

}
