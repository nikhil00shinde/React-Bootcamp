import React, { useEffect, useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { Pagination } from ".";

function Movies() {
	const [movies, setMovie] = useState([]);
	const [page, setPage] = useState(1);
	const [hover, setHover] = useState("");
	const [favourites, setFavourites] = useState([]);

	function goAhead() {
		setPage(page + 1);
	}

	function goBehind() {
		if (page > 1) setPage(page - 1);
	}

	const add = (movie) => {
		const newArr = [...favourites, movie];
		setFavourites([...newArr]);
	};

	useEffect(() => {
		const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;

		axios.get(url).then((res) => {
			setMovie(res.data.results);
		});
	}, [page]);

	return (
		<>
			<div className="mb-8">
				<div className="font-bold text-2xl mt-8 text-center mb-8 ">
					Trending Movies
				</div>
				{movies.length === 0 ? (
					<div className="flex justify-center">
						<TailSpin
							height="100"
							width="100"
							color="grey"
							ariaLabel="loading"
						/>
					</div>
				) : (
					<div className="flex flex-wrap justify-center">
						{movies.map((movie, i) => (
							<div
								key={i}
								className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[25vh] md:h-[30vh] bg-center bg-cover w-[150px] md:w-[250px] rounded-xl flex items-end m-4 hover:scale-110 duration-300 ease-out relative`}
								onMouseEnter={() => setHover(movie.id)}
								onMouseLeave={() => setHover("")}
							>
								{hover === movie.id &&
									(favourites.find((m) => m.id === movie.id) ? (
										<div className="p-2 bg-gray-800 rounded-xl text-xl absolute top-2 right-2 cursor-pointer ">
											❌
										</div>
									) : (
										<div
											className="p-2 bg-gray-800 rounded-xl text-xl absolute top-2 right-2 cursor-pointer "
											onClick={() => add(movie)}
										>
											😍
										</div>
									))}
								<div className="bg-gray-900 text-white p-2 w-full text-center rounded-b-xl font-bold">
									{movie.title}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			<Pagination pageProp={page} goAhead={goAhead} goBehind={goBehind} />
		</>
	);
}

export default Movies;
