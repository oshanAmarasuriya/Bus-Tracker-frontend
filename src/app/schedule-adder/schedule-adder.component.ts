import { Component } from '@angular/core';
import { RequestHandlingService } from '../services/request-handling.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-adder',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './schedule-adder.component.html',
  styleUrl: './schedule-adder.component.css'
})
export class ScheduleAdderComponent {

  routeList: any[] = [];

  constructor(private requestHandlingService: RequestHandlingService, private router: Router){
  }

  ngOnInit(): void {
    //Calling backend API
    this.requestHandlingService.fetchRoutes().subscribe((result) => {
      this.routeList = result;
      console.log(this.routeList);
    },
      (error) => {
        console.error(error);

      });

  }

  formData = {
    routeId: null,
    departureTime: null,
    arrivalTime: null
  };

  onProceed() {
    // Log form data in JSON format
    if(this.formData.routeId!=null && this.formData.arrivalTime!=null && this.formData.departureTime!=null ){
      this.requestHandlingService.sendSchedule((this.formData)).subscribe((result) => {
        alert("Successfully added!");
        this.clearForm();
        this.router.navigate(['/home']);
      },
        (error) => {
          alert("something went wrong!");
        });
  
    }
  }

  clearForm() {
    this.formData.routeId = null;
    this.formData.arrivalTime = null;
    this.formData.departureTime = null;
  }

}
