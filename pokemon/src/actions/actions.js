import * as actions from "./actiontypes";
import axios from "axios";

export const addPokemon = (pokemon) => {
	return { type: actions.ADD_POKEMON, payload: pokemon };
};

export const removePokemon = (pokemon) => {
	return { type: actions.REMOVE_POKEMON, payload: pokemon };
};

export const clearPokemon = () => {
	return { type: actions.CLEAR_LIST };
};

export const searchPokemon = (pokemon) => (dispatch) => {
	axios
		.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
		.then((res) => {
			const pokemon = {
				id: res.data.id,
				name: res.data.name,
				imgFront: res.data.sprites.front_default,
				imgBack: res.data.sprites.back_default,
			};
			dispatch(addPokemon(pokemon));
		})
		.catch((err) => console.log(err));
};
