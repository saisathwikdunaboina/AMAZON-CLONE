import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';

export default function Login() {
            const history = useHistory();
            const [email, setEmail]  = useState('');
            const [Password, setPassword]  = useState('');
            const signIn = e => {
                e.preventDefault();

                auth
                .signInWithEmailAndPassword(email, Password)
                .then(auth => {
                    history.push('/')
                })

            }

            const register = e => {
                e.preventDefault();

                auth
                .createUserWithEmailAndPassword(email, Password)
                .then((auth) => {
             // it successfully created a new user with email and password      
                    console.log(auth);
                    if (auth) {
                        history.push('/')
                    }
                })
                .catch(error => alert(error.message))
            }

    return (
        <div className='login'>
            <Link to="/">
            <img className="login_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG21.png'/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>


                    
                    <h5>Password</h5>
                    <input type='text' value={Password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign-In</button>
                </form>
                
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE conditions of Use & Sale. please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice. 
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}
