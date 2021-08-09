import { AppState } from "../store";

export const groupQuerySelector = (state: AppState) => state.groups.query;

export const groupsSelector = (state : AppState) =>{
    const groupIds = state.groups.queryMap[state.groups.query] || [];
    return groupIds.map(id => {
      return state.groups.byId[id]});
}

export const groupSelectorById = (state : AppState) =>{
  return  state.groups.byId[state.groups.selectedGroupId];
}