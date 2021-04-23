import { useState } from "react";
import { connect } from "react-redux";
import { searchPokemon } from "../actions/actions";

const SearchBar = (props) => {
	const [input, setInput] = useState("");
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				margin: "3% 0 5%",
			}}
		>
			<input
				placeholder="Search for a pokemon!"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				onClick={() => {
					props.searchPokemon(input.toLowerCase());
					setInput("");
				}}
			>
				Search
			</button>
		</div>
	);
};

export default connect(null, { searchPokemon })(SearchBar);
