export interface Option {
  text: string;
  idNextMessage?: number;
}

export interface Message {
  id?: number;
  message: string;
  type: string;
  options?: Option[];
  selectedOptions?: boolean;
  personality?: string;
  typingDone?: boolean;
  timestamp?: string;
  sender?: "user" | "bot";
}

export interface Conversation {
  id: number;
  title: string;
  messages: Message[];
  createdAt?: string;
  updatedAt?: string;
  isArchived?: boolean;
  isPinned?: boolean;
}
