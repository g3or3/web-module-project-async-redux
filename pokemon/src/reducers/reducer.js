import * as actions from "../actions/actiontypes";

const initialState = {
	pokemon: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_POKEMON:
			return {
				...state,
				pokemon: [...state.pokemon, action.payload],
			};
		case actions.REMOVE_POKEMON:
			return {
				pokemon: state.pokemon.filter(
					(p) => p.id !== action.payload.id
				),
			};
		case actions.CLEAR_LIST:
			return {
				pokemon: [],
			};
		default:
			return state;
	}
};

export default reducer;
