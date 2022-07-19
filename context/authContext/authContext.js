import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Config/firebase";
import { userInitialization } from "../../FirebaseModules/UserInitialization";
import { useLoading } from "../loadingContext/loadingContext";

const AuthContext = createContext({
  login: () => {},
  signup: () => {},
  logout: () => {},
  user: null,
  setUser: () => {},
});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { btnClickProcessing, setBtnClickProcessing } = useLoading();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        //console.log(user);
      } else {
        setUser(false);
      }
    });

    return unsubscribe();
  }, []);

  const signup = (data) => {
    setBtnClickProcessing(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        console.log("Signup UID: " + userCredential.uid);

        const docRef = userInitialization(data);
        console.log(docRef);

        updateProfile(auth.currentUser, {
          displayName: data.userName,
          email: data.email,
        })
          .then(() => {
            console.log("USER NAME & EMAIL SET");
          })
          .catch((error) => {
            console.log(error);
          });

        if (user && docRef) {
          logout();
          login(data.email, data.password);
          setBtnClickProcessing(false);
          //console.log(user);
        } else if (docRef) {
          login(data.email, data.password);
          //console.log(user);
        }
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  const login = (email, password) => {
    setBtnClickProcessing(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser({
          uid: userCredential._tokenResponse.uid,
          email: userCredential._tokenResponse.email,
          displayName: userCredential._tokenResponse.displayName,
        });
        console.log(userCredential);
        setBtnClickProcessing(false);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(false);
        //console.log(user);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        return error;
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
