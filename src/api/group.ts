import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL } from "./base";


interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status: "all-groups" | "favourite" | "achieved";
}

interface GroupResponse {
    data: Group[];
}

export const fetchGroups= (data: GroupRequest) =>{
    const url = BASE_URL + "/groups";
    console.log("Fetch Group is Working");
    
    return axios.get<GroupResponse>(url, {params: data})
    .then(response =>{ return response.data.data; })
    .catch(e => console.error(e));
}
