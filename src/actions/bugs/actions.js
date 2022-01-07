import * as actionType from "./actionsType";

const bugAdded = description => {
    return {
        type: actionType.BUG_ADDED,
        payload: {
            description
        }
    }
}

const bugRemove = id => {
    return {
        type: actionType.BUG_REMOVE,
        payload: {
            id
        }
    }
}

const bugResolve = id => {
    return {
        type: actionType.BUG_RESOLVE,
        payload: {
            id
        }
    }
}

export {
    bugAdded,
    bugRemove,
    bugResolve
}