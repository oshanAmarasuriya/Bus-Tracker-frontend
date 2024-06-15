import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestHandlingService } from '../services/request-handling.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-adder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './route-adder.component.html',
  styleUrl: './route-adder.component.css'
})
export class RouteAdderComponent {

  constructor(private requestHandlingService: RequestHandlingService, private router: Router){
  }

  formData = {
    routeNumber: null,
    origin: null,
    destination: null
  };

  onProceed() {
    // Log form data in JSON format
    if(this.formData.routeNumber!=null && this.formData.destination!=null && this.formData.origin!=null ){
      this.requestHandlingService.sendRoute((this.formData)).subscribe((result) => {
        alert("Successfully added!");
        this.clearForm();
        this.router.navigate(['/add']);
      },
        (error) => {
          alert("something went wrong!");
        });
  
    }
  }

  onCancel(){
    this.clearForm();
    this.router.navigate(['/add']);
  }

  
  clearForm() {
    this.formData.routeNumber = null;
    this.formData.destination = null;
    this.formData.origin = null;
  }

}
