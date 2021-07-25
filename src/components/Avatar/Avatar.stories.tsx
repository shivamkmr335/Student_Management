import "../../index.css"
import Avatar from "./Avatar";

export default {
    title: 'My Avatar',
    component: Avatar,
}

export const main = (args : any) => <Avatar {...args}></Avatar>

main.args = {
    className: "",
    imgUrl: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",

};