import React, { Component } from 'react'
import loadJS from 'loadjs'
// import firebaseui from 'firebaseui'

const initFirebaseAndUI = () => {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBlk2ih1JtOdSNoaG6_-bRKV7fdFS0ls4E',
    authDomain: 'opportunity-hack-ea7d5.firebaseapp.com',
    databaseURL: 'https://opportunity-hack-ea7d5.firebaseio.com',
    projectId: 'opportunity-hack-ea7d5',
    storageBucket: 'opportunity-hack-ea7d5.appspot.com',
    messagingSenderId: '272025491458'
  }
  window.firebase.initializeApp(config)

  var ui = new window.firebaseui.auth.AuthUI(window.firebase.auth())
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none'
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      window.firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  }
  console.log(ui)
  ui.start('#firebaseui-auth-container', uiConfig)
}

class Firebase extends Component {
  componentDidMount() {
    loadJS(
      [
        'https://www.gstatic.com/firebasejs/5.5.5/firebase.js',
        'https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.js'
      ],
      {
        success: initFirebaseAndUI,
        async: false
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container" />
        <div id="loader">Loading...</div>
      </div>
    )
  }
}

export default Firebase
