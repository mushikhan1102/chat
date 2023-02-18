import React, { Component } from "react";
//import firebase from 'firebase/app';
import { db } from './firebase'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

//import {initializeApp} from "firebase/app"
//import {getFirestore} from "firebase/firestore"
//import {getStorage} from "firebase/storage"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, setDoc, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { db } from './firebase'
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnaQj9QBLNKYcl5WLEbA4k7UNytUEJwco",
  authDomain: "chat-app-b3086.firebaseapp.com",
  projectId: "chat-app-b3086",
  storageBucket: "chat-app-b3086.appspot.com",
  messagingSenderId: "960925832919",
  appId: "1:960925832919:web:0a6575de8058fcba298292",
  measurementId: "G-Y58PKBBYCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

