import React from "react";
import Image from "../Banner.jpg";

function Banner() {
	return (
		<>
			<div
				className={`bg-[url(${Image})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end`}
			>
				<div className="bg-slate-900 w-full text-xl md:text-3xl text-white flex justify-center p-6 bg-opacity-50">
					The King's Man
				</div>
			</div>
		</>
	);
}

export default Banner;
