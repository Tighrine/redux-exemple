import * as actionsType from "./actionsType";

const loggedIn = token => {
    return {
        type: actionsType.AUTH_LOGGED_IN,
        payload: {
            token,
            loggedIn: true
        }
    }
}

const loggedOut = () => {
    return {
        type: actionsType.AUTH_LOGGED_OUT,
        payload: {
            token: '',
            loggedIn: false
        }
    }
}

export {
    loggedIn, 
    loggedOut
}