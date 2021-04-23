import { connect } from "react-redux";
import { removePokemon } from "../actions/actions";

const Pokemon = (props) => {
	const { pokemon, removePokemon } = props;
	const { name, imgFront, imgBack } = pokemon;
	return (
		<div style={{ marginBottom: "5%" }}>
			<p style={{ textAlign: "center" }}>
				<strong>{name.toUpperCase()}</strong>
			</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div>
					<img src={imgFront} alt={name} />
					<img src={imgBack} alt={name} />
				</div>
			</div>
			<button
				style={{ display: "block", margin: "0 auto" }}
				onClick={() => removePokemon(pokemon)}
			>
				Remove
			</button>
		</div>
	);
};

export default connect(null, { removePokemon })(Pokemon);
