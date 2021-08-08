import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";

export const ME_FETCH ="me/fetch";
export const ME_LOGIN ="me/login";

const meFetchAction = (u: User)=> ({type: ME_FETCH, payload:u});
const meLoginAction = (u: User)=> ({type: ME_LOGIN, payload:u});


export const authActions= bindActionCreators(
    {
        fetch: meFetchAction,
        login: meLoginAction
    },
    store.dispatch
)

// So when we call-> authActions.fetch(xyz)  -> Its equivalent to =>  store.dispatch(meFetchAction(xyz));