import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RestService {
  baseUrl: string;
  constructor(private http: HttpClient) {
  }
  testService() {
    console.log('rest service ...');
  }
  /*getAlfrescoTicket(credentials: string): Observable<string> {
    console.log('Url: ' + this.baseUrl);
    console.log('getAlfrescoTicket');
    return this.sendRequest('POST', this.baseUrl + 'alfresco/service/api/login', credentials);
  }*/
  getAlfrescoUserInfo() {
    console.log('getAlfrescoUserInfo');
    return this.sendRequest('GET', 'alfresco/user/info');
  }
  private sendRequest<T>(type: string, url: string, body?: String)
    : Observable<T> {
    console.log('url in send request: ' + url);
    console.log('sendRequest body ' + body);
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    myHeaders = myHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    myHeaders = myHeaders.set('Access-Control-Allow-Origin', '*');
    return this.http.request<T>(type, url, {
      body: body,
      headers: myHeaders
    });
  }
  testJson(username: string, password: string) {
    console.log('');
  }
  updateAlfrescoUserInformation(data: string) {
    console.log('data: ' + data);
  }
}
