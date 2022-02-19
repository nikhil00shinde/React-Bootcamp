import React from "react";
import Image from "../Banner.jpg";

function Movies() {
	return (
		<>
			<div className="mb-8">
				<div className="font-bold text-2xl mt-8 text-center mb-8 ">
					Trending Movies
				</div>
				<div className="flex flex-wrap justify-center">
					<div
						className={`bg-[url(${Image})] h-[25vh] md:h-[30vh] bg-center bg-cover w-[150px] md:w-[200px] rounded-xl flex items-end m-4 hover:scale-110 duration-300 ease-out`}
					>
						<div className="bg-gray-900 text-white p-2 w-full text-center rounded-b-xl font-bold">
							Title
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Movies;
