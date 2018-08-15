import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<Person> {
    const newPerson = {
      name: "Pete"
    };
    return this.http.post<Person>("/api/v1/people", newPerson);
  }
}
