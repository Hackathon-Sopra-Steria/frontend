// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    API_URL: 'http://10.94.33.140',
    team: '/team',
    messageTeam: '/team/:id'
  }
};

