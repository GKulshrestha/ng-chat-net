import { Component, OnInit } from '@angular/core';
import { ChatBoxService } from '../services/chat-box.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  availableChatBoxes = [];
  constructor(private chatBoxService: ChatBoxService) {
    this.availableChatBoxes = chatBoxService.chatBoxes;
  }

  ngOnInit() {}
}
