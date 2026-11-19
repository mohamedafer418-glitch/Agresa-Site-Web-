// Firebase / Cloudinary settings (not secrets) and the chatbot addresses.
// The site tries these addresses in turn and remembers the one that works on each phone.
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
  // 1) Vercel: put YOUR full domain here, copied from the address bar, then /api/chat
  chatUrl: 'https://agresa-site-web.vercel.app/api/chat',
  // 2) Cloudflare Worker
  chatUrl2: 'https://agresa-chatbot.mohamedafer418.workers.dev',
  chatUrl3: ''
};
