/**
 * 서버 사이드?
 */
export const isServer = typeof window === "undefined";

/**
 * 클라이언트 사이드?
 */
export const isClient = typeof window !== "undefined";

/**
 * base url
 */
export const BASE_URL = isServer ? process.env.NEXTAUTH_URL : window.location.origin;

/**
 * api base url
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
