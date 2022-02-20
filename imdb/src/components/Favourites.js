import React from "react";

function Favourites() {
	return (
		<>
			<div className="mt-4 flex justify-center p-2 space-x-2">
				<button className="m-2 px-2 p-2 bg-blue-400 rounded-xl font-bold text-white">
					All genre
				</button>
				<button className="m-2 px-2 p-1 bg-gray-400 rounded-xl font-bold text-white hover:bg-blue-400">
					Action
				</button>
			</div>
			<div>Inputs Container</div>
			<div>Table Container</div>
			<div>Pagination</div>
		</>
	);
}

export default Favourites;
