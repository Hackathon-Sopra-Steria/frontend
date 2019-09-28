// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_AUTH_URL: '/api/login',
  API_TEAMS_URL: 'http://192.168.0.105:8089/api/teams/all',
  API_ACHIEVEMENTS_URL: '/api/achievements',
  MOCK_TOKEN: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsIlVzZXJJZCI6IjEiLCJyb2xlIjoiQURNSU4iLCJleHAiOjE1Njk2MjY5MjN9.8Ggv1jYAZ6rc52x8b_nuHkMSP4pEsKXbZedS2gG1oio'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
