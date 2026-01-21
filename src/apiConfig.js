// This checks if the app is running on your computer or a live server
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

// REPLACE the 'render' URL below with the one you get from your hosting provider
export const API_BASE_URL = isLocalhost 
  ? "http://localhost:5500" 
  : "https://project-server-j1ix.onrender.com";