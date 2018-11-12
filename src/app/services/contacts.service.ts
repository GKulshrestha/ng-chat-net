import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlProviderService } from './url-provider.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  httpClient: HttpClient;
  urlProvider: UrlProviderService;
  constructor(httpClient: HttpClient, urlProvider: UrlProviderService) {

  }
getAllContacts(userName: string): string[] {
 // this.httpClient.get();
  return ['asd', 'asdsad'];
}


}
