import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RequestHandlingService } from '../services/request-handling.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scheduleData: any[] = []; //stores contractlis

  constructor(private requestHandlingService: RequestHandlingService){

  }

  ngOnInit(): void {
    //Calling backend API
    this.requestHandlingService.fetchData().subscribe((result) => {
      this.scheduleData = result;
      console.log(this.scheduleData);
    },
      (error) => {
        console.error(error);

      });

  }

}
