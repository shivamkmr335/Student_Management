import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;     // return entire group state from redux store  