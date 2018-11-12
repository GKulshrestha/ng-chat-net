import { Component, OnInit, Input } from "@angular/core";
import { ChatBoxService } from "../services/chat-box.service";
import { Person } from "../person";
import { Presence } from "../presence";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @Input()
  displayName: string;
  constructor(private chatBoxService: ChatBoxService) {
    // this.displayName = 'gaurav';
  }

  ngOnInit() {}
  openChatBox(displayName) {
   this.chatBoxService.openChat(new Person(displayName, Presence.Online));
  }
}
