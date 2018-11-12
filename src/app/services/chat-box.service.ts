import { Injectable } from "@angular/core";
import { Person } from "../person";

@Injectable({
  providedIn: "root"
})
export class ChatBoxService {
  chatBoxes: Person[] = [];
  openChat(chatWith: Person) {
    this.chatBoxes.push(chatWith);
  }
  closeChat(chatWith: Person) {
    this.chatBoxes = this.chatBoxes.filter(p => p.name !== chatWith.name);
  }
  constructor() {}
}
