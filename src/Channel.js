import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import {db} from './firebase'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {getFirestore, setDoc, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"; 
import querySnapshot from 'firestore';
import React, {useState, useEffect} from 'react';
import Message from './Message';

const Channel = ({ user = null, db = null }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(' ');
    const { uid, displayName, photoURL} = user;
    useEffect(() => {
        if (db){
            const unsubscribe = db.collection('messages')
            .orderBy('createdAt').limit(100)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));

                setMessages(data);
            });

            return unsubscribe;

        }
    }, [db]);

    const handleOnChange = e => {
        setNewMessage(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        if(db){
            db.collection('messages').add({

                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
    }

        return(
            <>
              <ul>
                {messages.map(message => (
                  <li key={message.id}>
                    <Message {...message} />
                  </li>
                ))}
              </ul>
              <form
                onSubmit={handleOnSubmit}>
                <input
                  //ref={inputRef}
                  type="text"
                  value={newMessage}
                  onChange={handleOnChange}
                  placeholder="Type your message here..."
                />
                <button
                  type="submit"
                  disabled={!newMessage}
                >
                  Send
                </button>
              </form>
            </>
          );
        };

  export default Channel;