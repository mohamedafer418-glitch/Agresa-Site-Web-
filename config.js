export const CFG = {
  firebase: {
    apiKey: 'AIzaSyCfyrUlEeQVMMYhQffn6Bf6wamMjgMWGzk',
    authDomain: 'agresa-site-web-3ddf8.firebaseapp.com',
    projectId: 'agresa-site-web-3ddf8',
    appId: '1:746487589412:web:11df4c9d51846bb502c6b1'
  },
  cloud: {
    name: 'fzla3xja',
    preset: 'agresa_preset'
  },
  chatUrl: 'https://agresa-chatbot.mohamedafer418.workers.dev'
};

// Keep-alive: يبقي اتصال الـ Worker نشطاً ويمنع انتهاء صلاحية DNS
setInterval(() => {
  fetch(CFG.chatUrl, { method: 'GET' })
    .then(() => {})
    .catch(() => {});
}, 180000); // كل 3 دقائق
