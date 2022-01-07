import * as actionsType from "../../src/actions/auth/actionsType";

const initialState = { }

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionsType.AUTH_LOGGED_IN:
        return { ...state, ...payload };
    case actionsType.AUTH_LOGGED_OUT:
        return { ...payload }

    default:
        return state
    }
}
