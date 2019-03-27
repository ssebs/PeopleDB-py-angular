import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    console.log(`Getting person with id: ${id}`);
    return this.http.get<Person>(`${this.baseUrl}/people/${id}`);
  }

  createPerson(person: Person): Observable<Object> {
    console.log("Creating new person!");
    return this.http.post(`${this.baseUrl}/people/create`, person);
  }

  updatePerson(person: Person, id: number):  Observable<Object> {
    console.log(`Updating person #${id}`);
    return this.http.patch(`${this.baseUrl}/people/update`, {...person, id})
  }

  deletePerson(id: number): Observable<Object> {
    console.log(`Deleting person #${id}`);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        "id": id.toString()
      },
    }
    return this.http.delete(`${this.baseUrl}/people/delete`);
  }

}
