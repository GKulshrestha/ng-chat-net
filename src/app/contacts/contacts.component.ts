import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contactsList: string[];
  constructor(private contactsService: ContactsService) {
    this.contactsList = contactsService.getAllContacts('');
  }

  ngOnInit() {
  }

}
