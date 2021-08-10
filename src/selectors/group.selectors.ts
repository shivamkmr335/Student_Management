import { AppState } from "../store";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.query;
}

const groupQueryMapSelector= (state: AppState) =>{
  const groupState= groupStateSelector(state);
  return groupState.queryMap;  
}

const groupByIdSelector = (state: AppState) =>{
  const groupState= groupStateSelector(state);
  return groupState.byId;  
}

// export const groupsSelector = (state : AppState) =>{
//     const groupIds = state.groups.queryMap[state.groups.query] || [];
//     return groupIds.map(id => {
//       return state.groups.byId[id]});
// }

export const groupsSelector = (state : AppState) =>{
  
  const query= groupQuerySelector(state);
  const queryMapp= groupQueryMapSelector(state);
  const byId= groupByIdSelector(state);

  const groupIds = queryMapp[query] || [];
  return groupIds.map(id =>byId[id]);
}


export const groupSelectorById = (state : AppState) =>{
  return  state.groups.byId[state.groups.selectedGroupId];
}