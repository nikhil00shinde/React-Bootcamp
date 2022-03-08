import React, { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../context/auth";
import { db } from "../firebase1";
import { onSnapshot, doc } from "firebase/firestore";

function ProfileComp() {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState({});
	const [postIds, setPostIds] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// onSnapshot -> realtime listener hain basically kuch nhi chanhes hooye ye bata dega

		const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
			setUserData(doc.data());
			setPostIds(doc.data().posts);
		});
		return () => {
			unsub();
		};
	}, [user]);

	useEffect(async () => {
		let tempArray = [];
		postIds.map(async (postid, id) => {
			const unsub = onSnapshot(doc(db, "post", postid), (doc) => {
				tempArray.push(doc.data());
				setPosts([...tempArray]);
			});
		});
	}, [postIds]);
	return (
		<div>
			<Navbar />
			<div>
				<div className="profile_upper">
					<img
						src={userData.photoURL}
						style={{
							height: "8rem",
							width: "8rem",
							borderRadius: "50%",
							objectFit: "cover",
							backgroundPosition: "center",
						}}
					/>
					<div style={{ flexBasis: "40%" }}>
						<h1>{userData.name}</h1>
						<h3>Posts : {userData?.posts?.length}</h3>
					</div>
				</div>
				<hr />
				<div className="profile_videos">
					{posts.map((post) => (
						<video src={post?.postUrl} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ProfileComp;
