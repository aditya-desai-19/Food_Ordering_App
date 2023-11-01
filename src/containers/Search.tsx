import React from "react";

interface SearchProps {
	onChange: (e: any) => void;
	value: string;
	onClick: (e: any) => void;
}

const Search: React.FC<SearchProps> = ({ onChange, value, onClick }) => {
	return (
		<div className="flex justify-center w-full m-4">
			<input
				type="text"
				placeholder="Search.."
				className="px-4 py-2 rounded-lg border-2 border-gray-400 w-56 m-2"
				onChange={onChange}
				value={value}
			/>
			<button
				type="submit"
				className="m-2 px-4 py-2 bg-red-500 rounded-lg text-white"
				onClick={onClick}
			>
				Search
			</button>
		</div>
	);
};

export default Search;
