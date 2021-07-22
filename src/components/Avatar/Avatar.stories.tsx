import "../../index.css"
import Avatar from "./Avatar";

export default {
    title: 'My Avatar',
    component: Avatar,
}

export const main = (args : any) => <Avatar {...args}></Avatar>

main.args = {
    className: "",

};