import "jsr:@std/dotenv/load";
import { PlanResponse } from "./types.ts";

Deno.serve(async (req: Request) => {
  const url = Deno.env.get("PLAN_URL");
  if (!url) {
    return new Response(JSON.stringify({
      success: false,
      message: "PLAN_URL is not set in .env",
    }), { status: 500 });
  }

  const res = await fetch(url);
  if (!res.ok) {
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to fetch data",
    }), { status: 500 });
  }
  const data: PlanResponse = await res.json();

  console.log(data.stopEvents.length)
  return new Response(JSON.stringify({
    success: true,
    data: {
      stopEvents: data.stopEvents.map(event => ({
        departureTimePlanned: event.departureTimePlanned,
        departureTimeEstimated: event.departureTimeEstimated,
        name: event.transportation.disassembledName,
        destination: event.transportation.destination.name
      })),
    },
  }), { status: 200 });
})