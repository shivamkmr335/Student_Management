import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;     // return entire group state from redux store  
export const userStateSelector = (state: AppState) => state.users;       
export const authStateSelector = (state: AppState) => state.auth;       