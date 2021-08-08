import { Reducer } from "redux";
import { Group } from "../models/Group";

export interface GroupState {
    byId:{
        [id: number]: Group;
    };
    query: string;
    queryMap: { [query: string]: number[] };
}

const initialState ={
    byId: {},
    query: "",
    queryMap: {}
}

export const groupReducer: Reducer<GroupState>= (state = initialState, action) => {
    switch (action.type){
        case 'groups/query' : 
            return { ...state , query: action.payload };
        case 'groups/fetch' : 
            const groups = action.payload.groups as Group[];
            const groupIds = groups.map((g) => g.id);
    
            const groupMap = groups.reduce((prev, group) => {
                return {...prev, [group.id]: group}
            },{});
    
            return {
                ...state,
                queryMap: { ...state.queryMap, [action.payload.query]:groupIds },
                byId: {...state.byId, ...groupMap}
            };
        default: 
            return state;
    }
}