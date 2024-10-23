import { redirect } from "react-router-dom";

const TOKEN_KEY = "token";
const EXPIRATION_KEY = "expiration";

export function getAuthToken() {
  const token = localStorage.getItem(TOKEN_KEY);
  const duration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (duration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function setAuthToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function setExpiration(expiration) {
  localStorage.setItem(EXPIRATION_KEY, expiration);
}

export function getExpiration() {
  return localStorage.getItem(EXPIRATION_KEY);
}

export function getTokenDuration() {
  const storedExpirationDate = getExpiration();
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();

  return expirationDate.getTime() - now.getTime();
}

export function removeAuthToken() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRATION_KEY);
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }

  return null;
}
