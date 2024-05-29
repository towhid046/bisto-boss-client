import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "./../../config/firebase";
import PropTypes from "prop-types";
import userAxiosPublic from "./../../hooks/userAxiosPublic";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosPublic = userAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign with google:
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  const updateUserProfile = (userName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const user = { email: currentUser?.email };
      if (currentUser) {
        // generate token:
        const generateToken = async () => {
          const { data } = await axiosPublic.post("/jwt", user);
          if (data.token) {
            localStorage.setItem("access-token", data.token);
          }
        };
        generateToken();
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => unSubscribe();
  }, [axiosPublic]);

  const userInfo = {
    createUser,
    user,
    loginUser,
    loading,
    // logOutUser,
    updateUserProfile,
    loginWithGoogle,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
