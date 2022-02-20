import React, { useState } from "react";

function Pagination({ pageProp, goAhead, goBehind }) {
	return (
		<>
			<div className="flex justify-center mb-8">
				<button
					className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-lg"
					onClick={goBehind}
				>
					Previous
				</button>
				<button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-indigo-100">
					{pageProp}
				</button>
				<button
					className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-lg"
					onClick={goAhead}
				>
					Next
				</button>
			</div>
		</>
	);
}

export default Pagination;
