# Volunteer Tracker

## Project Description 

S.W.I.F.T is a Non-Profit Organization aiding underrepresented students, their mission is to remove barriers for students seeking higher education to seek their fullest potential. The project allows SWIFT volunteers to sign up and input their availability for events and keep track of volunteer hours. SWIFT's system currenly utilizes Remind, a texting application to notify volunteers on events and opportunities. Currently, volunteer hours and communication is not tracked. SWIFT would like a system that allows for tracking statistics of volunteers and generate reports. 

# Table of Contents
- Project Needs
- Project Wants
- Features
- Firebase script
- Deploy link

## Project Needs
- Track volunteer hours
- Track communication for volunteers (Text messages, emails, etc.)
- Notifications must have user preferences

## Project Wants
- Input data on graduation year for students
- School name of students

## Features

- Sign up
- Login
- Home
- Events
- Volunteers
- Export Volunteers


## Firebase Script
Copy and paste the snippet below at the bottom of your HTML, before other script tags.

```
<script src="https://www.gstatic.com/firebasejs/5.5.5/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlk2ih1JtOdSNoaG6_-bRKV7fdFS0ls4E",
    authDomain: "opportunity-hack-ea7d5.firebaseapp.com",
    databaseURL: "https://opportunity-hack-ea7d5.firebaseio.com",
    projectId: "opportunity-hack-ea7d5",
    storageBucket: "opportunity-hack-ea7d5.appspot.com",
    messagingSenderId: "272025491458"
  };
  firebase.initializeApp(config);
</script>
```

## Deployed to:
### Test the program at this link
`https://opportunity-hack-ea7d5.firebaseapp.com`
