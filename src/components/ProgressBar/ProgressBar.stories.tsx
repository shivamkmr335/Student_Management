import "../../index.css"
import ProgressBar from "./ProgressBar";

export default {
    title: 'Progress Bar',
    component: ProgressBar,
    argTypes :{
        progress:{
            control: {
                type : "range",
                min: 0,
                max: 100,
                step: 2
            }
        }
    }
}

export const main = (args : any) => <ProgressBar {...args}></ProgressBar>

main.args = {
    progress: 20,
};