import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RequestHandlingService } from '../services/request-handling.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scheduleData: any[] = []; //stores schedule data

  constructor(private requestHandlingService: RequestHandlingService, private router: Router){

  }

  ngOnInit(): void {
    //Calling backend API
    this.requestHandlingService.fetchData().subscribe((result) => {
      this.scheduleData = result;
      //console.log(this.scheduleData);
    },
      (error) => {
        console.error(error);

      });

  }

  onButtonClick(scheduleId: number, routeInfo: string) {

    this.router.navigate(['/vote', scheduleId,routeInfo]);
  }

  onLocationClick(latitude: number,longitude: number){
    if(latitude>0.0 && longitude>0.0){
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(url, '_blank');
    }
  }

}
