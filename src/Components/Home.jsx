import React from "react";
import '../App.css';
import { Link } from "react-router-dom";





function Home() {
  return (
    <>
    <section class="user">
  <div className="user_options-container">
    <div className="user_options-text">
      <div className="user_options-unregistered">
        <h2 className="user_unregistered-title">Don't have an account?</h2>
        <p className="user_unregistered-text"> Hurry up , Register and win Gifts </p>
        <Link to={`/signin`}>
        <button className="user_unregistered-signup" id="signup-button">Sign up</button>
        </Link>
      </div>

      <div className="user_options-registered">
        <h2 className="user_registered-title">Have an account?</h2>
        <p className="user_registered-text"> You can Use your account and login to our site  </p>
        <Link to={`/login`} >
        <button className="user_registered-login" id="login-button" >Login</button>
        </Link>
      </div>
    </div>
    </div>
    </section>
    </>
  );
}

export default Home;