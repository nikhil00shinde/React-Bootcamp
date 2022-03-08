import React, { useState } from "react";
import { Button } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../firebase1";
import {
	arrayUnion,
	doc,
	updateDoc,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Upload = ({ userData }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [progress, setProgress] = useState(0);

	function handleChange(e) {
		const file = e.target.files[0];
		if (file === null) {
			setError("Please select a file");
			setTimeout(() => {
				setError("");
			}, 2000);
			return;
		}

		if (file.size / (1024 * 1024) > 30) {
			setError("Please select a smaller file ");
			setTimeout(() => {
				setError("");
			}, 2000);
			return;
		}
		let uid = uuidv4();
		setLoading(true);
		const storageRef = ref(storage, `${userData.uid}/post/${uid}`);

		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(prog);
				console.log("Upload is " + prog + "% done");
			},
			(error) => {
				console.log(error);
				setError(error.message);
				setTimeout(() => {
					setError("");
				}, 2000);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					console.log("File available at", downloadURL);
					let obj = {
						likes: [],
						postId: uid,
						postUrl: downloadURL,
						profileName: userData.name,
						profileUrl: userData.photoURL,
						uid: userData.uid,
						timestamp: serverTimestamp(),
					};
					// firestore
					await setDoc(doc(db, "post", uid), obj);
					console.log("post added in post collection");
					await updateDoc(doc(db, "users", userData.uid), {
						posts: arrayUnion(uid),
					});
					setLoading(false);
					setProgress(0);
				});
			}
		);
	}
	return (
		<div className="upload-btn">
			{error !== "" ? (
				<Alert severity="error">{error}</Alert>
			) : (
				<Button
					fullWidth
					variant="outlined"
					startIcon={<MovieIcon />}
					component="label"
					style={{ marginTop: "1rem" }}
				>
					<input
						type="file"
						accept="video/*"
						style={{ display: "none" }}
						onChange={handleChange}
					/>
					Upload
				</Button>
			)}

			{loading && (
				<LinearProgress
					variant="determinate"
					value={progress}
					sx={{ marginTop: "0.2rem" }}
				/>
			)}
		</div>
	);
};

export default Upload;
