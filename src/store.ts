import { AnyAction, createStore } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

interface AppState {
    me?: User,
    groups: Group[],
    isSidebarOpen: boolean
}

const initialState: AppState = {
    me: undefined,
    groups: [],
    isSidebarOpen: true
}

const reducer = ( currentState = initialState , dispatchedAction: AnyAction ) =>{
    switch(dispatchedAction.type){
        
        case 'me/login' : return { ...currentState , me: dispatchedAction.payload };
 
        default: return currentState;
    }
}

export const store = createStore(reducer);