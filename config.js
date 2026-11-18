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
  chatUrl: 'https://agresa-chatbot.mohamedafer418.workers.dev',
  chatUrl2: 'https://agresa-chat.pages.dev',
  chatUrl3: 'https://agresa-site-aeb-f9qh.vercel.app/api/chat'
};
