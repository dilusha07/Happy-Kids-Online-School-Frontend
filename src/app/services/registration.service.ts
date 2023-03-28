import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor';
import { User } from '../models/user';

//const NAV_URL = environment.apiURL;
const NAV_URL = '';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user = new User();
  professor = new Professor();

  constructor(private _http: HttpClient) { }

  public registerUserFromRemote(user : User):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}/registeruser`,user)
}

public registerProfessorFromRemote(professor : Professor):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}/registerprofessor`,professor)
}

}
