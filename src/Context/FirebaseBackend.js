import { Component, createContext } from "react";
import { withRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {
  addDoc,
  setDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt_09mEpDwchDzbhZBPKDq9Mo35sI9zlQ",
  authDomain: "labelias.firebaseapp.com",
  projectId: "labelias",
  storageBucket: "labelias.appspot.com",
  messagingSenderId: "544517495469",
  appId: "1:544517495469:web:9a8f4b4e0d7fe6a40d8424",
  measurementId: "G-HTQBFSF1G2",
};

// init firbase app
initializeApp(firebaseConfig);

// init services
export const db = getFirestore();
export const auth = getAuth();

// collections
const collections_Friends = collection(db, "Friends");
const collection_UsersData = collection(db, "Users");

// running Snapshots

export const FirebaseBackend = createContext();

class FirebaseBackendProvider extends Component {
  state = {
    DBFriends: [],
    user: null,
  };

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({ user: user });
      if (user) {
        let a = this.SnapshotsManaging(user.uid);
        this.setState({ realtimes: a });
      } else {
        this.setState({ DBFriends: null });
      }
    });
  }

  SnapshotsManaging(userId) {
    onSnapshot(collection(db, "Users", userId, "Friends"), (snapshots) => {
      let Friends = [];
      snapshots.forEach((document) => {
        Friends.push({ ...document.data(), id: document.id });
      });
      this.setState({ DBFriends: Friends });
    });
  }

  componentDidUpdate() {
    // console.log("user", this.state.user);
  }

  collections_Friends_addDoc = (document) => {
    addDoc(collection(db, "Users", this.state.user.uid, "Friends"), document);
  };

  collections_Friends_deleteDoc = (document_id) => {
    let document = doc(
      db,
      "Users",
      this.state.user.uid,
      "Friends",
      document_id
    );
    deleteDoc(document);
  };

  handleUserData = (credential) => {
    const { history } = this.props;
    this.setState({ user: credential.user });
    if (credential) {
      history.push("/");
    }
  };

  auth_createUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        // addDoc(collection(db, "Users", credential.user.uid, "Friends"), {
        //   fullName: "ali",
        //   specific: "a2",
        // });
        this.handleUserData(credential);
      })
      .catch((error) => console.dir(error));
  };

  auth_signInWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        this.handleUserData(credential);
      })
      .catch((error) => console.dir(error));
  };

  auth_signOut = () => {
    signOut(auth).then((a) => {
      console.log("FirebaseBackend - signOut", a);
    });
  };

  render() {
    return (
      <FirebaseBackend.Provider
        value={{
          ...this.state,
          collections_Friends_addDoc: this.collections_Friends_addDoc,
          collections_Friends_deleteDoc: this.collections_Friends_deleteDoc,

          auth_createUserWithEmailAndPassword:
            this.auth_createUserWithEmailAndPassword,
          auth_signInWithEmailAndPassword: this.auth_signInWithEmailAndPassword,
          auth_signOut: this.auth_signOut,
        }}
      >
        {this.props.children}
      </FirebaseBackend.Provider>
    );
  }
}

export default withRouter(FirebaseBackendProvider);
