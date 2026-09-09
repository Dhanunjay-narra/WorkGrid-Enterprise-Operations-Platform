import { UUID } from '@nexora/types';

export interface ChatMessage {
  id: UUID;
  channelId: UUID;
  senderId: UUID;
  text: string;
  sentAt: string;
}

export class CommunicationEngine {
  private messages: ChatMessage[] = [];

  public postMessage(channelId: UUID, senderId: UUID, text: string): ChatMessage {
    const msg: ChatMessage = {
      id: 'msg_' + Math.random().toString(36).substring(2, 9),
      channelId,
      senderId,
      text,
      sentAt: new Date().toISOString()
    };
    this.messages.push(msg);
    return msg;
  }

  public getChannelMessages(channelId: UUID): ChatMessage[] {
    return this.messages.filter((m) => m.channelId === channelId);
  }
}
