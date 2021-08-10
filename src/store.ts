import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/auth.reducers";
import { groupReducer } from "./reducers/groups.reducers";
import { userReducer } from "./reducers/users.reducer";


const reducer = combineReducers({
    users: userReducer,
    groups: groupReducer,
    auth: authReducer 
})


export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export type AppState = ReturnType<typeof store.getState>;



// export interface AppState {
//     auth: AuthState,
//     users: UserState,
//     groups?: GroupState,
// }
 

// const reducer: Reducer<AppState> = ( state = initialState , action: AnyAction ) => {
//     return {
//         auth: authReducer(state.auth, action),
//         users: userReducer(state.users, action),
//         groups: groupReducer(state.groups , action)
//     }
// }

// switch(dispatchedAction.type){
        
//     case 'me/login' :
//     case 'me/fetch' : return { ...currentState , me: dispatchedAction.payload };
//     case 'groups/query' : return { ...currentState , groupQuery: dispatchedAction.payload };
//     case 'groups/fetch' : 
//         const groups = dispatchedAction.payload.groups as Group[];
//         const groupIds = groups.map((g) => g.id);

//         const groupMap = groups.reduce((prev, group) => {
//             return {...prev, [group.id]: group}
//         },{});

//         return {
//             ...currentState,
//             groupQueryMap: { ...currentState.groupQueryMap, [dispatchedAction.payload.query]:groupIds },
//             groups: {...currentState.groups, ...groupMap}
//         };

//     default: return currentState;
