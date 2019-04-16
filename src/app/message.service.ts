import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []; // cache of messages

  constructor() {
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
