import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
    const [user, setUser]= useState(null)
    const auth= getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser= result.user;
            console.log(loggedInUser);
            setUser(loggedInUser)
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    const handleGithubSignIn= ()=>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error=> {
            console.log(error)
        })

    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            setUser(null)
            console.log(result)
        })
        .catch(error=> {
            console.log(error);
        })
    }
    return (
        <div>
            {
                user?<button onClick={handleSignOut}>Sign Out</button>:
                <div>
                <button onClick={handleGithubSignIn}>Github Login</button>
                <button onClick={handleGoogleSignIn}>Google login</button>
                </div>
            }
               
                
                
                
                
                
            
            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                </div>
            }
            
            
        
        
        </div>


    );
};

export default Login;