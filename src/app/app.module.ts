import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactsService } from './services/contacts.service';
import { UrlProviderService } from './services/url-provider.service';
import { MainComponent } from './main/main.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatBoxService } from './services/chat-box.service';
import { DraggableDivDirective } from './draggable-div.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    MainComponent,
    ChatBoxComponent,
    DraggableDivDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ContactsService, UrlProviderService, ChatBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
