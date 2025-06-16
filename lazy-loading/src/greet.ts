import type { EventRequest, EventResponse } from "./types";

console.log("🟣 Greet function loaded successfully.");

export const greetFunction = (event: EventRequest): EventResponse => {
  // Simulate some processing
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from the Greet function!",
      input: event,
    }),
  };
};
