/* 
1. visit: console.firebase.google.com
2. create project (skip google analytics)
3. Register app(create config)
4. Install firebase: npm install firebase
5. add config file to your project
6. Danger: Do not publish or make firebase config to public by pushing those to github
7. Go to docs > build > Authentication > Web > Get Started
8. export app from the firebase.config.js file: export default app
9. Login.jsx: import getAuth from firebase/auth 
10. create const auth = getAuth(app)
11. import googleAuthProvider and create a new provider
12. const handleGoogleSignIn=()=>{
    
}

<button onClick={handleGoogleSignIn}></button>

13. import googleAuthProvider and create a new provider
14. use signInWithPopup and pass auth and provider
15. activate sign-in method(google,facebook, github)
16. [vite]: change 127.0.0.1 to localhost
---------------------
More Auth Provider
---------------------
1. activate the auth provider (create app,provider redirect url, client id, client secret)
*/


