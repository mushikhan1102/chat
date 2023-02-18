
import React, {useState, useEffect} from 'react';
import Channel from "./Channel";
import Button from './Button';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
    if (initializing) {
      setInitializing(false);
    }
  });

  // Cleanup subscription
  return unsubscribe;
}, [initializing]);
  
  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {

    try{
      await firebase.auth().signOut();
    }
    catch (error){
      console.log(error.message);
    }
  };

  if (initializing) return "Loading...";

  return (
    <div>
      {
        user ? (
          <>
            <Button onClick={signOut}>Sign out</Button>
            < Channel user={user} db={db} />
          </>
        ) : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      }
    </div>
  );
}

export default App;
