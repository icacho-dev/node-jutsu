import type { EventRequest, EventResponse } from "./types";

console.log("🟢 Handler function loaded successfully.");

const defaultFunction = (event: EventRequest): EventResponse => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from the Default function!",
      input: event,
    }),
  };
};

export async function handler(event: EventRequest): Promise<EventResponse> {
  console.log("Event received:", JSON.stringify(event, null, 2));

  let response: EventResponse;

  switch (event?.action) {
    case "greet":
      const { greetFunction } = await import("./greet");
      response = greetFunction(event);
      break;
    default:
      response = defaultFunction(event);
  }

  console.log("Response:", response);

  return response;
}

// Also export as default for backward compatibility
export default handler;
