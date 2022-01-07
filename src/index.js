import store from "./store";
import * as bugActions from "./actions/bugs/actions";
import * as authActions from "./actions/auth/actions";

const unsubscribe = store.subscribe(() => {
    console.log("State changed", store.getState());
});

store.dispatch(bugActions.bugAdded('first bug'));

//store.dispatch(bugActions.bugRemove(1));

store.dispatch(bugActions.bugResolve(1));

store.dispatch(authActions.loggedIn('djlskdf4545sdfsdadas7878'));

store.dispatch(authActions.loggedOut());

unsubscribe();

console.log(store.getState());