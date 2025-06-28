export interface Message {
    message: string;
    type: "text" | "image" | "video" | "audio" | "file" | "welcome";
    options?: string[];
    personality?: string;
    timestamp?: string; // ISO date string
    sender?: "user" | "bot"; // Optional, to distinguish between user and bot messages
}