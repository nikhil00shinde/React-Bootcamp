import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			<div className="flex space-x-8 pl-12 items-center border py-4">
				<img
					className="w-[50px] md:w-[60px]"
					src="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png"
					alt="logo_movieapp"
				/>
				<Link to="/" className="text-blue-400 font-bold text-xl md:text-3xl">
					Movies
				</Link>
				<Link
					to="/favourites"
					className="text-blue-400 font-bold text-xl md:text-3xl"
				>
					Favourites
				</Link>
			</div>
		</>
	);
}

export default NavBar;
