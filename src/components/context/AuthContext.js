import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { addDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, pasword) {
    createUserWithEmailAndPassword(auth, email, pasword);
    addDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  function logIn(email, pasword) {
    return signInWithEmailAndPassword(auth, email, pasword);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscrible();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
