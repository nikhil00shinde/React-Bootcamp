import React from "react";
import { Button } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import LinearProgress from "@mui/material/LinearProgress";

const Upload = () => {
	return (
		<div className="upload-btn">
			<Button
				fullWidth
				variant="outlined"
				startIcon={<MovieIcon />}
				component="label"
				style={{ marginTop: "1rem" }}
			>
				<input type="file" accept="image/*" style={{ display: "none" }} />
				Upload
			</Button>
			<LinearProgress
				variant="determinate"
				value={50}
				sx={{ marginTop: "0.2rem" }}
			/>
		</div>
	);
};

export default Upload;
