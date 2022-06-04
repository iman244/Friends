import { Component, createContext } from "react";
import { initializeApp } from 'firebase/app';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    onSnapshot
} from 'firebase/firestore';

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

// collections
const collections_Friends = collection(db, 'Friends');

// get collections data


export const DBContext = createContext();

class DBContextProvider extends Component {
    state = { DBFriends: [] }
    componentDidMount() {
        onSnapshot(collections_Friends, (snapshots) => {
            let Friends = []
            snapshots.forEach((document) => {
                Friends.push({ ...document.data(), id: document.id })
            })
            this.setState({ DBFriends: Friends });
        })
    }

    collections_Friends_addDoc(document) { addDoc(collections_Friends, document) }
    collections_Friends_deleteDoc(document_id) { let document = doc(db, 'Friends', document_id); deleteDoc(document) }

    render() {

        return (
            <DBContext.Provider value={{ ...this.state, collections_Friends_addDoc: this.collections_Friends_addDoc, collections_Friends_deleteDoc: this.collections_Friends_deleteDoc }}>
                {this.props.children}
            </DBContext.Provider >
        )
    }
}

export default DBContextProvider;