import React from "react";
import Navbar from "./Navbar";

function ProfileComp() {
	return (
		<div>
			<Navbar />
			<div>
				<div className="profile_upper">
					<img
						src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
						style={{
							height: "8rem",
							width: "8rem",
							borderRadius: "50%",
							objectFit: "cover",
							backgroundPosition: "center",
						}}
					/>
					<div style={{ flexBasis: "40%" }}>
						<h1>Name</h1>
						<h3>Posts : 10</h3>
					</div>
				</div>
				<hr />
				<div className="profile_videos">
					<video />
				</div>
			</div>
		</div>
	);
}

export default ProfileComp;
