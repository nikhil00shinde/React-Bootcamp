import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Next inbuilt Image
import Image from "next/image";
import insta from "../assests/insta.jpg";
// requires a loader
import { Carousel } from "react-responsive-carousel";

import bg1 from "../../assests/bg1.jpg";
import bg2 from "../../assests/bg2.jpg";
import bg3 from "../../assests/bg3.jpg";
import bg4 from "../../assests/bg4.jpg";
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";

function index() {
	const router = useRouter();
	const { login, user } = useContext(AuthContext);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const { forgetPassword } = useContext(AuthContext);
	const handleClick = async () => {
		try {
			setLoading(true);
			setError("");
			await forgetPassword(email);
			router.push("/login");
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
		<div className="login-container">
			<div className="carbg">
				<div className="car">
					<Carousel
						showIndicators={false}
						showArrows={false}
						showStatus={false}
						infiniteLoop={true}
						autoPlay={true}
						showThumbs={false}
						interval={2000}
					>
						<Image key={1} src={bg1} />
						<Image key={2} src={bg2} />
						<Image key={3} src={bg3} />
						<Image key={4} src={bg4} />
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					{error !== "" && <div style={{ color: "red" }}>{error}</div>}
					<Button
						fullWidth
						variant="contained"
						component="span"
						style={{ marginTop: "1rem" }}
						onClick={handleClick}
					>
						Send Email
					</Button>
				</div>
				<div className="bottom-card">
					Dont't Have an Account? <span style={{ color: "blue" }}>Sign Up</span>
				</div>
			</div>
		</div>
	);
}

export default index;
