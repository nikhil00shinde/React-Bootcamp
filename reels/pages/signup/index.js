import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Next inbuilt Image
import Image from "next/image";
import insta from "../../assests/insta.jpg";
import Link from "next/link";

function index() {
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
				<TextField
					size="small"
					margin="dense"
					id="outlined-basic"
					fullWidth
					label="Full Name"
					variant="outlined"
				/>
				<Button
					fullWidth
					variant="outlined"
					component="label"
					style={{ marginTop: "1rem" }}
				>
					<input type="file" accept="image/*" style={{ display: "none" }} />
					Upload
				</Button>
				<Button
					fullWidth
					variant="contained"
					component="span"
					style={{ marginTop: "1rem" }}
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

export default index;
