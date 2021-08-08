import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants";


const groupsQueryAction = (query: string) => ({
    type: GROUPS_QUERY,
    payload: query,
});

const groupsQueryCompletedAction = (query: string , groups: Group[]) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query , groups},
});

export const groupActions = bindActionCreators(
    {
        query: groupsQueryAction,
        queryCompleted: groupsQueryCompletedAction,
    },
    store.dispatch
);
