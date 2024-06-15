import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationCaptureService {

  constructor() { }

  getLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }
  
}
