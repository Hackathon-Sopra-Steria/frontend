export const environment = {
  production: true,
  MOCK_TOKEN: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsIlVzZXJJZCI6IjEiLCJyb2xlIjoiQURNSU4iLCJleHAiOjE1Njk2MjY5MjN9.8Ggv1jYAZ6rc52x8b_nuHkMSP4pEsKXbZedS2gG1oio',
  api: {
    team: '/team',
    messageTeam: '/team/:id',
    API_AUTH_URL: 'http://localhost:8088/api/login',
    API_TEAMS_URL: 'http://localhost:8089/api/teams',
    API_ACHIEVEMENTS_URL: 'http://localhost:8087/api/achievements',
    API_DAILY_URL: 'http://localhost:8086/api/daily',
    API_PLANNING_URL: 'http://localhost:8085/api/planning',
    API_RETRO_URL: 'http://localhost:8084/api/retro',
    API_CHAT_URL: 'http://localhost:8083/api/chat',
    API_MYSPRINT_URL: 'http://localhost:8082/api/mysprint'
  }
};
