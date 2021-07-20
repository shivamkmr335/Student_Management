import InputBox from "./InputBox";

export default {
    title: 'Form Input',
    component: InputBox,
}

export const main = (args : any) => <InputBox {...args}></InputBox>

main.args = {
    touched: false,
    error: "Error Message",
    placeholder: "Enter your Details",
};
