import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor';
import { environment } from 'src/environments/environment';

//const NAV_URL = environment.apiURL;
const NAV_URL = '';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http : HttpClient) { }

  
  public addProfessor(professor : Professor):Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addProfessor`,professor);
  }

  getTotalProfessors(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalprofessors`);
  }

  getTotalUsers(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalusers`);
  }

  getTotalCourses(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalcourses`);
  }

  getTotalWishlist(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalwishlist`);
  }

  getTotalEnrollments(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalenrollments`);
  }

  getTotalEnrollmentCount(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalenrollmentcount`);
  }

  getTotalChapters(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalchapters`);
  }

}
