// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import toast from "react-hot-toast";

import { userHandle } from "./utils";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCEEfbFfUa3QaxchGFG-uNeLuedY6RFO_M",
	authDomain: "kavun-30126.firebaseapp.com",
	projectId: "kavun-30126",
	storageBucket: "kavun-30126.appspot.com",
	messagingSenderId: "753976129938",
	appId: "1:753976129938:web:8324adb2e8fec5711b294b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const db = getFirestore(app); //db oluşturuldu

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid))
    let data= {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data()
    }
    userHandle(data);
  } else {
    userHandle(false);
  }
}); //auth ile ilgili bir değişiklik olduğunda

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const getUserInfo = async uname => {
	const username = await getDoc(doc(db, "usernames", uname))
	if (username.exists()) {
		return (await getDoc(doc(db, "users", username.data().user_id))).data()
	} else {
		toast.error("Kullanıcı bulunamadı!")
		throw new Error("Kullanıcı bulunamadı!")
	}
}

// // for Header
// export const getInfoo = async (uid) => {
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     return docSnap.data()
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }

export const register = async ({email, full_name, username, password}) => {
	try {
		const user = await getDoc(doc(db, "usernames", username))
		if (user.exists()) {
			toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
		} else {
			const response = await createUserWithEmailAndPassword(auth, email, password)
			if (response.user) {

				await setDoc(doc(db, "usernames", username), {
					user_id: response.user.uid
				})

				await setDoc(doc(db, "users", response.user.uid), {
					fullName: full_name,
					username: username,
					followers: [],
					following: [],
					notifications: [],
					website: '',
					bio: '',
					phoneNumber: '',
					gender: '',
					posts: 0
				})

				await updateProfile(auth.currentUser, {
					displayName: full_name
				})

				return response.user

			}
		}
	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
