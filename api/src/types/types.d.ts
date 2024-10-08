import WebSocket from 'ws';

export interface ExtendedWebSocket extends WebSocket {
  id?: string;
  email?: string;
  names?: string;
  lastnames?: string;
}

export interface MessageDataInt {
  recipient: string;
  text: string;
}