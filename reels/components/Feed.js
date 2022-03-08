import { Upcoming } from "@mui/icons-material";
import React, { useEffect, useContext, useState } from "react";
import Navbar from "./Navbar";
import Upload from "./Upload";
import { AuthContext } from "../context/auth";
import Post from "./Post";
import {
	collection,
	doc,
	onSnapshot,
	orderBy,
	snapshotEqual,
	Timestamp,
	query,
} from "firebase/firestore";
import { db } from "../firebase1";

function Feed() {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState({});
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// onSnapshot -> realtime listener hain basically kuch nhi chanhes hooye ye bata dega

		const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
			setUserData(doc.data());
		});
		return () => {
			unsub();
		};
	}, [user]);

	useEffect(() => {
		const unsub = onSnapshot(
			query(collection(db, "post"), orderBy("timestamp", "desc")),
			(snapshot) => {
				let tempArray = [];
				snapshot.forEach((doc) => {
					tempArray.push(doc.data());
				});
				setPosts([...tempArray]);
				console.log(tempArray);
			}
		);

		return () => {
			unsub();
		};
	}, []);
	return (
		<div className="feed-container">
			<Navbar userData={userData} />
			<Upload userData={userData} />
			<div className="videos-contianer">
				{posts.map((post) => (
					<Post postData={post} userData={userData} />
				))}
			</div>
		</div>
	);
}

export default Feed;
