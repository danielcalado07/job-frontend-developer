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
