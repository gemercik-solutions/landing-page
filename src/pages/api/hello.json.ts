import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      name: "Gemercik Solution API",
      version: "1.0.0",
      message: "Welcome to Gemercik Solution",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
