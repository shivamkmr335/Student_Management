import "../../index.css"
import Alert from "./Alert";

export default {
    title: 'Alerts',
    component: Alert,
}

export const main = (args : any) => <Alert {...args}></Alert>

main.args = {
    children: "Sign in",
    className: "",
};