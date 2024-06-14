import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestHandlingService } from '../services/request-handling.service';

@Component({
  selector: 'app-voting',
  standalone: true,
  imports: [],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.css'
})
export class VotingComponent {

  scheduleId: any;
  routeInfo: any;

  latitude: number=0.0;
  longitude: number=0.0;

  constructor(private activatedRoute: ActivatedRoute, private requestHandlingService: RequestHandlingService,private router: Router) {}

  ngOnInit() {
    this.scheduleId = this.activatedRoute.snapshot.paramMap.get('scheduleId');
    this.routeInfo = this.activatedRoute.snapshot.paramMap.get('routeInfo');

    this.latitude=1.2;
    this.longitude=3.4;
    //console.log(".....",this.routeInfo);
    
  }

  onButtonClick(){
    this.requestHandlingService.addVote(this.scheduleId,this.latitude,this.longitude).subscribe((result) => {
      console.log(result);
      alert("Done!");
    },
      (error) => {
        if(error.status==403){
          alert("You have already voted")
        }

      });
      this.router.navigate(['/home']);

  }


}
