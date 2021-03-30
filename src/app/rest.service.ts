import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';
import * as Highcharts from 'highcharts';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  list:any;
  constructor(private http: HttpClient) { }
  restUrl: string = "https://run.mocky.io/v3/9f03adf7-def4-48bc-9995-a8326672c425";
  
  restUrl1: string = "https://run.mocky.io/v3/cdfd486c-5e94-44e1-babe-24e536d4ad23";
  restUrl2:string="https://run.mocky.io/v3/fd1df92d-1a44-4fb2-8ca1-0adb9f86ba20";
  getUsers() {
    this.list=this.http.get<Users[]>(this.restUrl);
    return this.list;
  }
  getInfoData() {
    return this.http.get<any>(this.restUrl1);
  }
  getInfoData1() {
    return this.http.get<any>(this.restUrl2);
  }

}
