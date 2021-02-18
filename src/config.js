const dev = process.env.NODE_ENV !== "production";

export const backendUrl = dev
  ? "http://localhost:3001"
  : "https://movielist-liard.vercel.app";
