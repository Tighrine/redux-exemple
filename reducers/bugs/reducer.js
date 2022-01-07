import { BUG_ADDED, BUG_REMOVE, BUG_RESOLVE } from "../../src/actions/bugs/actionsType";

let lastId = 0

export default function reducer(state = [], action) {

    switch (action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolve: false
                }
            ];
        case BUG_REMOVE:
            return state.filter(bug => bug.id !== action.payload.id);
        case BUG_RESOLVE: {
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : { ...bug, resolve: true } );
        }
        default:
            return state;
    }
}