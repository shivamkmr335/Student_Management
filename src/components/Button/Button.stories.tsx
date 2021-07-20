import Button from "./Button";
import "../../index.css"

export default {
    title: 'My Awesome Button',
    component: Button,
}

export const main = (args : any) => <Button {...args}></Button>

main.args = {
    children: "Sign in",
    className: "",

};