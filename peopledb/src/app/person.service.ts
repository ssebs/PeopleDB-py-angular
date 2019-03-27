import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl: string = "http://api.ssebs.com";


  constructor(private http: HttpClient) { }

  getPeople(qry: string): Person[] {
    return [];
  }

  getPerson(id: number): Observable<Person> {
    // const tmp = new Person("john", "Smith", "eml@ssebs.com");
    // return of(tmp);
    return this.http.get<Person>(`${this.baseUrl}/people/${id}`)
  }

  createPerson(person: Person): Observable<Object> {
    console.log("Creating new person!");
    console.log(person);
    return this.http.post(`${this.baseUrl}/people/create`, person);
  }

}
