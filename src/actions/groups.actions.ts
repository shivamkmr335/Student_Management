import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED, GROUPS_SELECTED_ID } from "./actions.constants";


const groupsQueryAction = (query: string) => ({
    type: GROUPS_QUERY,
    payload: query,
});

const groupsQueryCompletedAction = (query: string , groups: Group[]) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query , groups},
});

const groupsQuerySetSelectedID = (query: number) => ({
    type: GROUPS_SELECTED_ID,
    payload: query,
});

export const groupActions = bindActionCreators(
    {
        query: groupsQueryAction,
        queryCompleted: groupsQueryCompletedAction,
        setSelectedId: groupsQuerySetSelectedID,
    },
    store.dispatch
);
