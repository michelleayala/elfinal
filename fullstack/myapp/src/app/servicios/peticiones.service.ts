import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { }

  post(url: string, payload: {}) {

    let promise = new Promise((resolve, reject) => {

      this.http.post(url, payload)
        .toPromise()
        .then((res: any) => {
          console.log(res)
          resolve(res)
        })
    })
    return promise
  }

  get(url: string) {
    let promise = new Promise((resolve, reject) => {

      this.http.get(url)
        .toPromise()
        .then((res: any) => {
          console.log(res)
          resolve(res)
        })
    })
    return promise
  }

  public urlLocal: string = "http://localhost:3000"
}
