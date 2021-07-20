import "../../index.css"
import Alert from "./Alert";

export default {
    title: 'My Alerts',
    component: Alert,
    argTypes: {
        theme:{
            control: { type: 'select'}
        }
    }
}

export const main = (args : any) => <Alert {...args}></Alert>

main.args = {
    children: "Sign in",
    className: "",
};