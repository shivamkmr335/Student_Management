import { createSelector } from "reselect";
import { AppState } from "../store";
import { groupStateSelector } from "./app.selectors";

// First Approach @groupQuerySelector
// export groupQuerySelector = (state: AppState) => state.groups.query;

// Second Approach @groupQuerySelector
// export const groupQuerySelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.query;
// }

// Third Approach @groupQuerySelector
export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

// Second Approach @groupQueryMapSelector
// const groupQueryMapSelector= (state: AppState) =>{
//   const groupState= groupStateSelector(state);
//   return groupState.queryMap;  
// }
const groupQueryMapSelector=createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
)

// Second Approach @groupByIdSelector
// const groupByIdSelector = (state: AppState) =>{
//   const groupState= groupStateSelector(state);
//   return groupState.byId;  
// }
const groupByIdSelector=createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
)


//  First Approach  @groupsSelector
// export const groupsSelector = (state : AppState) =>{
//     const groupIds = state.groups.queryMap[state.groups.query] || [];
//     return groupIds.map(id => {
//       return state.groups.byId[id]});
// }

// Second Approach  @groupsSelector
// export const groupsSelector = (state : AppState) =>{
//   const query= groupQuerySelector(state);
//   const queryMapp= groupQueryMapSelector(state);
//   const byId= groupByIdSelector(state);

//   const groupIds = queryMapp[query] || [];
//   return groupIds.map(id =>byId[id]);
// }

// Third Approach
export const groupSelector = createSelector(
  [
    groupQuerySelector,
    groupQueryMapSelector,
    groupByIdSelector
  ],
  (query, queryMap , byId ) => {
    const groupIds = queryMap[query] || [];
    return groupIds.map(id =>byId[id]);
  }
)

export const groupSelectorById = (state : AppState) =>{
  return  state.groups.byId[state.groups.selectedGroupId];
}