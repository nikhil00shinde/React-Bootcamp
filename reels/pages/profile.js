import React, { useContext } from "react";
import ProfileComp from "../components/ProfileComp";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

function Profile() {
	const { user } = useContext(AuthContext);
	const Redirect = () => {
		const route = useRouter();
		route.push("/login");
		return null;
	};

	return <>{user?.id ? <ProfileComp /> : <Redirect />}</>;
}

export default Profile;
