import { useContext, createContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const googleSignOut = () => signOut(auth);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      localStorage.removeItem('henrycorretor_credentials');
      if (currentUser)
        localStorage.setItem(
          'henrycorretor_credentials',
          JSON.stringify(currentUser),
        );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const providerObj = {
    user,
    googleSignIn,
    googleSignOut,
  };

  return (
    <AuthContext.Provider value={providerObj}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;