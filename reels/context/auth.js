import React from "react";
import { auth } from "../firebase";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	sendPasswordResetEmail,
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
	};
	return (
		<AuthContext.Provider value={store}>
			{!loading && children}
		</AuthContext.Provider>
	);
}

export default AuthWrapper;
