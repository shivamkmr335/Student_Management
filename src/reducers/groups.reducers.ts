import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED, GROUPS_SELECTED_ID } from "../actions/actions.constants";
import { Group } from "../models/Group";

export interface GroupState {
    byId:{
        [id: number]: Group;
    };
    query: string;
    queryMap: { [query: string]: number[] };
    selectedGroupId: number; 
}

const initialState ={
    byId: {},
    query: "",
    queryMap: {},
    selectedGroupId: 0
}

export const groupReducer: Reducer<GroupState>= (state = initialState, action) => {
    switch (action.type){
        case GROUPS_QUERY : 
            return { ...state , query: action.payload };
        case GROUPS_QUERY_COMPLETED : 
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
        case GROUPS_SELECTED_ID:
            const currentID = action.payload as number;
            return {
                ...state,
                selectedGroupId: currentID
            }
        default: 
            return state;
    }
}