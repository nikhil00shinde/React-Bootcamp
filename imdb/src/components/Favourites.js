import React, { useState } from "react";
import { Pagination } from ".";

function Favourites() {
	const [curGenre, setCurGenre] = useState("Action");

	const people = [
		{
			name: "Jane Cooper",
			title: "Regional Paradigm Technician",
			department: "Optimization",
			role: "Admin",
			email: "jane.cooper@example.com",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
		},
		{
			name: "Jane Cooper",
			title: "Regional Paradigm Technician",
			department: "Optimization",
			role: "Admin",
			email: "jane.cooper@example.com",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
		},
		{
			name: "Jane Cooper",
			title: "Regional Paradigm Technician",
			department: "Optimization",
			role: "Admin",
			email: "jane.cooper@example.com",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
		},
		{
			name: "Jane Cooper",
			title: "Regional Paradigm Technician",
			department: "Optimization",
			role: "Admin",
			email: "jane.cooper@example.com",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
		},
		{
			name: "Jane Cooper",
			title: "Regional Paradigm Technician",
			department: "Optimization",
			role: "Admin",
			email: "jane.cooper@example.com",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
		},
		// More people...
	];

	return (
		<>
			<div className="mt-4 flex justify-center p-2 space-x-2">
				<button
					className={
						curGenre === "All Genres"
							? "m-2 px-2 p-2 bg-blue-400 rounded-xl font-bold text-white"
							: "m-2 px-2 p-1 bg-gray-400 rounded-xl font-bold text-white hover:bg-blue-400"
					}
				>
					All Genres
				</button>
				<button
					className={
						curGenre === "Action"
							? "m-2 px-2 p-2 bg-blue-400 rounded-xl font-bold text-white"
							: "m-2 px-2 p-1 bg-gray-400 rounded-xl font-bold text-white hover:bg-blue-400"
					}
				>
					Action
				</button>
			</div>
			<div className="text-center">
				<input
					type="text"
					placeholder="Search"
					className="border border-2 text-center p-1 m-2"
				/>
				<input
					type="number"
					placeholder="Rows"
					className="border border-2 text-center p-1 m-2"
				/>
			</div>

			<div className="flex flex-col m-4">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50 min-w-full">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Name
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											<div className="flex">
												<img
													src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
													className="mr-2 cursor-pointer"
												/>
												Rating
												<img
													src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
													className="ml-2 mr-2"
												/>
											</div>
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											<div className="flex">
												<img
													src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
													className="mr-2"
												/>
												Popularity
												<img
													src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
													className="ml-2 mr-2"
												/>
											</div>
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Genre
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Remove
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{people.map((movie) => (
										<tr key={movie.id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 md:h-[100px] md:w-[180px]">
														<img
															className="hidden md:block md:h-[100px] md:w-[180px]"
															src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
															alt=""
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 font-bold">
															{movie.title}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">
													{movie.vote_average}
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">
													{movie.popularity}
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"></span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
												<button
													href="#"
													className="text-red-600 hover:text-red-900"
												>
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-4">
				<Pagination />
			</div>
		</>
	);
}

export default Favourites;
