import { connect } from "react-redux";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
	const { pokemon } = props;
	return (
		<>
			{pokemon.map((p) => (
				<Pokemon key={p.id} pokemon={p} />
			))}
		</>
	);
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(PokemonList);
