# خطوات الإطلاق (مجانية بلا بطاقة)

1. console.firebase.google.com: أنشئ مشروعاً (عطّل Analytics).
2. Build > Authentication > Get started > فعّل Google.
3. Build > Firestore Database > Create (Production mode) > تبويب Rules: الصق محتوى firestore.rules ثم Publish.
4. Project settings > Your apps > Web (</>): انسخ apiKey وauthDomain وprojectId وappId إلى js/config.js.
5. في Firestore أنشئ مجموعة admins، ومعرّف المستند هو إيميلك بأحرف صغيرة (مثل name@gmail.com)، وفيه حقل role = admin.
6. cloudinary.com حساب مجاني: Settings > Upload > Add upload preset > Signing mode: Unsigned. ضع اسم الحساب واسم الـ preset في config.js.
7. ارفع كل المجلد إلى GitHub Pages، ثم في Firebase: Authentication > Settings > Authorized domains أضف نطاق موقعك (اسم.github.io).
8. افتح /admin.html وسجّل الدخول بـ Google.
