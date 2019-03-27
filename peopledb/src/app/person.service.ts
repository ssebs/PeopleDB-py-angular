import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl: string = "http://api.ssebs.com";


  constructor(private http: HttpClient) { }

  getPeople(qry: string): Person[] {
    return [];
  }

  createPerson(person: Person): Observable<Object> {
    console.log("Creating new person!");
    console.log(person);
    return this.http.post(`${this.baseUrl}/people/create`, person);
  }

}
