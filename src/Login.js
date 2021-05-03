import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase.js";

const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const SignIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                if(auth) history.push("/");
            })
            .catch(err => alert(err.message));
    }

    const Register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth => {
                if(auth) history.push("/");
            })
            .catch( err => alert(err.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG9.png" alt="" className="login__image"/>
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email-Id</h5>
                    <input onChange={e => setEmail(e.target.value)} type="text" value={email}/>

                    <h5>Password</h5>
                    <input onChange={e => setPassword(e.target.value)} type="password" value={password}/>

                    <button onClick={SignIn} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>suno saare dunya walo kitna bhi tum t karwalo , karenge ham t saari 
                night , dum hai to rokh ke dikalo</p>

                <button onClick={Register} className="login__signUpButton">Sign Up</button>
            </div>
        </div>

            
    )
}

export default Login
