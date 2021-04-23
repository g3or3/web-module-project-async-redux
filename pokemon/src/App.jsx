import { useEffect } from "react";
import { connect } from "react-redux";
import { addPokemon, clearPokemon } from "./actions/actions";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";

const saveList = (list) => {
	localStorage.setItem("pokemon", JSON.stringify(list));
};

function App(props) {
	const { pokemon, addPokemon, clearPokemon } = props;

	useEffect(() => {
		if (localStorage.getItem("pokemon")) return;
		else localStorage.setItem("pokemon", "[]");
	}, []);

	useEffect(() => {
		const list = JSON.parse(localStorage.getItem("pokemon"));
		list.map((p) => addPokemon(p));
	}, [addPokemon]);

	return (
		<div>
			<button
				style={{ display: "block", margin: "2% auto 0" }}
				onClick={() => saveList(pokemon)}
			>
				Save List!
			</button>
			<button
				style={{ display: "block", margin: "2% auto 0" }}
				onClick={() => {
					localStorage.setItem("pokemon", "[]");
					clearPokemon();
				}}
			>
				Clear List
			</button>
			<SearchBar />
			<PokemonList />
		</div>
	);
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, { addPokemon, clearPokemon })(App);
