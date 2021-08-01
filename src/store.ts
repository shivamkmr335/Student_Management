import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore , Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

export interface AppState {
    me?: User,
    groups: Group[],
    isSidebarOpen: boolean
}

const initialState: AppState = {
    me: undefined,
    groups: [],
    isSidebarOpen: true
}

const reducer: Reducer<AppState> = ( currentState = initialState , dispatchedAction: AnyAction ) => {
    switch(dispatchedAction.type){
        
        case 'me/login' :
        case 'me/fetch' : return { ...currentState , me: dispatchedAction.payload };
        case 'groups/fetch' : return { ...currentState , groups: dispatchedAction.payload };
 
        default: return currentState;
    }
}

export const meFetchAction = (u: User)=> ({type: "me/fetch", payload:u});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );