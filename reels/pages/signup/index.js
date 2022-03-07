import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Next inbuilt Image
import Image from "next/image";
import insta from "../../assests/insta.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Index() {
	const router = useRouter();
	const { signup, user } = useContext(AuthContext);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [name, setName] = React.useState("");
	const [file, setFile] = React.useState(null);
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const handleClick = async () => {
		try {
			setLoading(true);

			setError("");
			// auth -> unique id
			const user = await signup(email, password);
			console.log("🚀 ~ file: index.js ~ line 31 ~ handleClick ~ user", user);

			// storage
			const storageRef = ref(storage, `${user.user.uid}/Profile`);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
				},
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						console.log("File available at", downloadURL);
						let obj = {
							name: name,
							email: email,
							uid: user.user.uid,
							photoURL: downloadURL,
						};
						// firestore
						await setDoc(doc(db, "users", user.user.uid), obj);
						console.log("comple");
					});
				}
			);
		} catch (err) {
			setError(err.message);
			setTimeout(() => {
				setError("");
			}, 2000);
		}

		setLoading(false);
	};

	React.useEffect(() => {
		if (user) router.push("/");
	}, [user]);
	return (
		<div className="signup-container">
			<div className="signup-card">
				<Image src={insta} />
				<TextField
					size="small"
					margin="dense"
					id="outlined-basic"
					fullWidth
					label="Email"
					variant="outlined"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					size="small"
					margin="dense"
					id="outlined-basic"
					fullWidth
					label="Password"
					type="password"
					variant="outlined"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextField
					size="small"
					margin="dense"
					id="outlined-basic"
					fullWidth
					label="Full Name"
					variant="outlined"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Button
					fullWidth
					variant="outlined"
					component="label"
					style={{ marginTop: "1rem" }}
				>
					<input
						type="file"
						accept="image/*"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					Upload
				</Button>
				<Button
					fullWidth
					variant="contained"
					component="span"
					style={{ marginTop: "1rem" }}
					onClick={handleClick}
					disabled={loading}
				>
					Sign Up
				</Button>
			</div>
			<div className="bottom-card">
				Already Have an Account?{" "}
				<Link href="/login">
					<span style={{ color: "blue" }}>Login</span>
				</Link>
			</div>
		</div>
	);
}

export default Index;
// ye jo Index naam ki cheej hain ye function nhi functional component hain
