import { Injectable } from '@angular/core';
import { ChatController } from '../controllers/chat.controller';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageMutationService {
  private baseUrl = 'api/messages'; // replace with actual URL

  constructor(private http: HttpClient, private chatController: ChatController) { }

  sendMessage(content: string, senderId: string): Observable<any> {
    return this.chatController.createMessage(content, senderId);
  }
}
