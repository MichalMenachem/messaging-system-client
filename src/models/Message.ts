export interface Message {
  sender: string;
  receiver: string;
  content: string;
  subject: string;
  creationDate: string;
}

export type MessageWithId = Message & { id: number };
