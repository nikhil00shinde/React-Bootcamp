import React from "react";
import { auth } from "../firebase";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	sendPasswordResetEmail,
	createUserWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = React.createContext();

function AuthWrapper({ children }) {
	const [user, setUser] = React.useState("");
	const [loading, setLoading] = React.useState(true);

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	function forgetPassword(email) {
		return sendPasswordResetEmail(auth, email);
	}

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	React.useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
		});
		setLoading(false);
	}, []);

	const store = {
		login,
		user,
		logout,
		forgetPassword,
		signup,
	};
	return (
		<AuthContext.Provider value={store}>
			{!loading && children}
		</AuthContext.Provider>
	);
}

export default AuthWrapper;
