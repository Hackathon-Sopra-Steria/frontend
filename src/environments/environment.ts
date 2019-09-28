// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MOCK_TOKEN: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsIlVzZXJJZCI6IjEiLCJyb2xlIjoiQURNSU4iLCJleHAiOjE1Njk2MjY5MjN9.8Ggv1jYAZ6rc52x8b_nuHkMSP4pEsKXbZedS2gG1oio',
  api: {
    API_URL: 'http://10.94.33.140',
    team: '/team',
    messageTeam: '/team/:id',
    API_AUTH_URL: 'http://10.94.32.221:8088/api/login',
    API_TEAMS_URL: 'http://10.94.32.221:8088/api/teams',
    API_ACHIEVEMENTS_URL: 'http://10.94.32.221:8088/api/achievements',
  }
};

