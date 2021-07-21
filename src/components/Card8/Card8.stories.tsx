import Card8 from "./Card8";

export default {
    title: 'Multiple Avatar',
    component: Card8,
    argTypes :{
        NoOfElements:{
            control: {
                type : "range",
                min: 0,
                max: 15,
                step: 1
            }
        }
    }
}

export const main = (args : any) => <Card8 {...args}></Card8>

main.args = {
    NoOfElements:4,
};
