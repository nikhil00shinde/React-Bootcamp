import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "../Banner.jpg";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=1`;

		axios.get(url).then((res) => {
			setMovie(res.data.results[0]);
		});
	}, []);

	return (
		<>
			<div
				className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end`}
			>
				<div className="bg-slate-900 w-full text-xl md:text-3xl text-white flex justify-center p-6 bg-opacity-50">
					{movie.title}
				</div>
			</div>
		</>
	);
}

export default Banner;
