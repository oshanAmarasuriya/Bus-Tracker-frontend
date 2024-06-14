import { Injectable } from '@angular/core';
import { UrlConfig } from '../../url.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlingService {

  private apiUrl=UrlConfig.apiUrl;

  constructor(private http: HttpClient) { }

  //Get schedule data
  fetchData(): Observable<any[]> {
     return this.http.get<any[]>(`${this.apiUrl}/v1/schedules/all`)
   }

   addVote(id: number, latitude: number, longitude: number) {
    const voteData = {
      latitude: latitude,
      longitude: longitude
    };

    return this.http.patch(`${this.apiUrl}/v1/schedules/vote/${id}`, voteData, { withCredentials: true });
  }


}
