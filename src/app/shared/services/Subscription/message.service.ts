import { Injectable } from '@angular/core';
import { PubSub } from 'graphql-subscriptions';

@Injectable({
  providedIn: 'root'
})
export class MessageSubscriptionService {
  private pubsub = new PubSub();
  private NEW_MESSAGE = 'NEW_MESSAGE';

  constructor() { }

  subscribeToNewMessages() {
    return this.pubsub.asyncIterator(this.NEW_MESSAGE);
  }
}
