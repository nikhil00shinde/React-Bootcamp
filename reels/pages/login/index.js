import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Next inbuilt Image
import Image from "next/image";
import insta from "../../assests/insta.jpg";
// requires a loader
import { Carousel } from "react-responsive-carousel";

import bg1 from "../../assests/bg1.jpg";
import bg2 from "../../assests/bg2.jpg";
import bg3 from "../../assests/bg3.jpg";
import bg4 from "../../assests/bg4.jpg";

function index() {
	return (
		<div className="login-container">
			<div className="carbg">
				<div className="car">
					<Carousel
						showIndicators={false}
						showArrows={false}
						showStatus={false}
						infiniteLoop={true}
						autoPlay={true}
						interval={2000}
					>
						<Image src={bg1} />

						<Image src={bg2} />

						<Image src={bg3} />

						<Image src={bg4} />
					</Carousel>
				</div>
			</div>
			<div>
				<div className="login-card">
					{/* basic image use method */}
					<Image src={insta} />
					<TextField
						size="small"
						margin="dense"
						id="outlined-basic"
						fullWidth
						label="Email"
						variant="outlined"
					/>
					<TextField
						size="small"
						margin="dense"
						id="outlined-basic"
						fullWidth
						label="Password"
						type="password"
						variant="outlined"
					/>
					<div style={{ color: "red" }}>Error yha aaega</div>
					<Button
						fullWidth
						variant="contained"
						component="span"
						style={{ marginTop: "1rem" }}
					>
						Login
					</Button>
					<div style={{ color: "blue", marginTop: "0.5rem" }}>
						Forget Password ?{" "}
					</div>
				</div>
				<div className="bottom-card">
					Dont't Have an Account? <span style={{ color: "blue" }}>Sign Up</span>
				</div>
			</div>
		</div>
	);
}

export default index;
