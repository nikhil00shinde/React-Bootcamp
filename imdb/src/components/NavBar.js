import React from "react";

function NavBar() {
	return (
		<>
			<div className="flex space-x-8 pl-12 items-center border py-4">
				<img
					src="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png"
					alt="logo_movieapp"
				/>
				<div className="text-blue-400 font-bold text-3xl">Movies</div>
				<div className="text-blue-400 font-bold text-3xl">Favourites</div>
			</div>
		</>
	);
}

export default NavBar;
