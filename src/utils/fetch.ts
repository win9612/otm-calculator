import { BASE_URL } from "./common";

/**
 * Fetch Route Handler
 */
export const fetchRouteHandler = async ({
  path,
  method,
  body,
  cache,
  next,
}: {
  path: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "OPTION";
  body?: string;
  cache?: "force-cache" | "no-store";
  next?: {
    revalidate?: false | 0 | number;
    tags?: string[];
  };
}) => {
  const response = await fetch(`${BASE_URL}/api/${path}`, {
    method: method,
    body: JSON.stringify(body),
    cache: cache,
    next: next,
  });

  if (response.headers.get("content-type") === "text/html") {
    throw new Error("Response Type is text/html");
  }

  return response;
};
