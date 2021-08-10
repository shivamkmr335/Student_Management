import { createSelector } from "reselect";
import { authStateSelector , userStateSelector } from "./app.selectors";

// export const meSelector = (state: AppState) =>
//   state.auth.id === undefined ? undefined : state.users.byId[state.auth.id];

const authIdSelector = createSelector(
    [authStateSelector],
    (authState)=> authState.id
)

export const meSelector = createSelector(
    [userStateSelector,authIdSelector],
    (userState,id) => userState.byId[id!]
)