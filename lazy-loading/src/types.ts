export interface EventRequest {
  [key: string]: string;
}

export interface EventResponse {
  statusCode: number;
  body: string;
}
