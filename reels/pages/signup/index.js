import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import insta from "../../assests/insta.jpg";

function index() {
	return (
		<div className="signup-container">
			<div className="signup-card">
				<Image src={insta} />
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			</div>
		</div>
	);
}

export default index;
