import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore , Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

export interface AppState {
    me?: User,
    isSidebarOpen: boolean,

    groupQuery:string,
    groupQueryMap: {[keyword: string]:number[]};

    groups: { [id:number]: Group},
}

const initialState: AppState = {
    me: undefined,
    isSidebarOpen: true,

    groupQuery: "",
    groupQueryMap: {},
    groups: {},
}

const reducer: Reducer<AppState> = ( currentState = initialState , dispatchedAction: AnyAction ) => {
    switch(dispatchedAction.type){
        
        case 'me/login' :
        case 'me/fetch' : return { ...currentState , me: dispatchedAction.payload };
        case 'groups/query' : return { ...currentState , groupQuery: dispatchedAction.payload };
        case 'groups/fetch' : 
            const groups = dispatchedAction.payload.groups as Group[];
            const groupIds = groups.map((g) => g.id);

            const groupMap = groups.reduce((prev, group) => {
                return {...prev, [group.id]: group}
            },{});

            return {
                ...currentState,
                groupQueryMap: { ...currentState.groupQueryMap, [dispatchedAction.payload.query]:groupIds },
                groups: {...currentState.groups, ...groupMap}
            };

        default: return currentState;
    }
}

export const meFetchAction = (u: User)=> ({type: "me/fetch", payload:u});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );