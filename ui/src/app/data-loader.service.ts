import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MessageModel} from "./message.model";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<MessageModel> {
    return this.httpClient.get<MessageModel>("http://localhost:8080/test");
  }

}
