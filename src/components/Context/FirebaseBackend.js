import { Component, createContext } from "react";
import { withRouter } from "react-router-dom";

import { initializeApp } from 'firebase/app';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    onSnapshot
} from 'firebase/firestore';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt_09mEpDwchDzbhZBPKDq9Mo35sI9zlQ",
    authDomain: "labelias.firebaseapp.com",
    projectId: "labelias",
    storageBucket: "labelias.appspot.com",
    messagingSenderId: "544517495469",
    appId: "1:544517495469:web:9a8f4b4e0d7fe6a40d8424",
    measurementId: "G-HTQBFSF1G2"
};

// init firbase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collections
const collections_Friends = collection(db, 'Friends');

// get collections data


export const FirebaseBackend = createContext();

class FirebaseBackendProvider extends Component {

    state = {
        DBFriends: [],
        user: null
    }

    componentDidMount() {
        onSnapshot(collections_Friends, (snapshots) => {
            let Friends = []
            snapshots.forEach((document) => {
                Friends.push({ ...document.data(), id: document.id })
            })
            this.setState({ DBFriends: Friends });
        });

        onAuthStateChanged(auth, (user) => {
            this.setState({user: user})
        })
    }


    collections_Friends_addDoc(document) { addDoc(collections_Friends, document) };

    collections_Friends_deleteDoc(document_id) { let document = doc(db, 'Friends', document_id); deleteDoc(document) };

    auth_createUserWithEmailAndPassword = (email, password) => {
        const { history } = this.props;
        createUserWithEmailAndPassword(auth, email, password)
            .then((credential) => {
                this.setState({user: credential.user});                
                if(credential) {history.push('/')}
            })
            .catch((error) => console.dir(error))
        };

        auth_signInWithEmailAndPassword =(email, password) => {
            const { history } = this.props;
            signInWithEmailAndPassword(auth, email, password)
            .then((credential) => {
                this.setState({user: credential.user});
                if(credential) {history.push('/')}
            })
        };

        auth_signOut() {
            signOut(auth)
                .then((a) => console.log("FirebaseBackend - signOut", a))
        }


    render() {
        
        return (
            <FirebaseBackend.Provider value={{
                ...this.state,
                collections_Friends_addDoc: this.collections_Friends_addDoc,
                collections_Friends_deleteDoc: this.collections_Friends_deleteDoc,
                
                auth_createUserWithEmailAndPassword: this.auth_createUserWithEmailAndPassword,
                auth_signInWithEmailAndPassword: this.auth_signInWithEmailAndPassword,
                auth_signOut: this.auth_signOut
                }}>
                {this.props.children}
            </FirebaseBackend.Provider >
        )
    }
}

export default withRouter(FirebaseBackendProvider);