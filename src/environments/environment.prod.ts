export const environment = {
  production: true,
  apiUrl: "https://algamoney-api.onrender.com",
  tokenAllowedDomains: [/algamoney-api.onrender.com/],
  tokenDisallowedRoutes: [/\/oauth2\/token/],
  oauthCallbackUrl: "https://algamoney-app.web.app/authorized",
  logoutRedirectToUrl: "https://algamoney-app.web.app",
};
