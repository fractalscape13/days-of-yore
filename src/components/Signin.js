import React from "react";
import firebase from 'firebase/app';
// import { withFirestore, isLoaded } from 'react-redux-firebase';
import 'firebase/auth';


function Signin(){
  
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("Successfully signed UP!!!!!!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully logged IN!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed OUT!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  //attempting to do a conditional rendering here similar to the rendering in MemoryControl.js so the signup/signin/signout forms only show at the correct time.  not functional currently, can't figure out how to access "auth" like i'm doing in MemoryControl.js

  // const auth = this.props.firebase.auth();
  // if (!isLoaded(auth)) {
  //   return (
  //     <div className="signin">
  //       <form onSubmit={doSignUp}>
  //         <input
  //           type='text'
  //           name='email'
  //           placeholder='Email address' />
  //         <input
  //           type='password'
  //           name='password'
  //           placeholder='Password' />
  //         <button type='submit'>Sign up</button>
  //       </form>
  //     </div>
  //   )
  // }
  // if ((isLoaded(auth)) && (auth.currentUser == null)) {
  //   return (
  //     <div className="signin">
  //       <h1>Sign In</h1>
  //       <form onSubmit={doSignIn}>
  //         <input
  //           type='text'
  //           name='signinEmail'
  //           placeholder='Email address' />
  //         <input
  //           type='password'
  //           name='signinPassword'
  //           placeholder='Password' />
  //         <button type='submit'>Log in</button>
  //       </form>
  //     </div>
  //   )
  // }
  // if ((isLoaded(auth)) && (auth.currentUser != null)) {
  //   return (
  //     <div className="signin">
  //       <h1>Sign Out</h1>
  //       <button onClick={doSignOut}>Sign out</button>
  //     </div>
  //   )
  // } 

  return (
    <div className="signin">
      <h1>Sign UP</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='Email address' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

      <h1>Sign IN</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='Email address' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Log in</button>
      </form>

      <h1>Sign OUT</h1>
      <button onClick={doSignOut}>Sign out</button>
    </div>
  );
}

export default Signin;