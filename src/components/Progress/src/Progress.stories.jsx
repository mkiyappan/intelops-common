import react from "react";
import Progress from "./Progress";
import '../../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Progress",
    component: Progress,
};

export const fuchsia = () => <Progress variant='fuchsia' progressPercentage="80%"> fuchsia</Progress>
export const slate = () => <Progress variant='slate' progressPercentage="80%"> slate</Progress>
export const cyan = () => <Progress variant='cyan' progressPercentage="80%"> cyan</Progress>
export const lime = () => <Progress variant='lime' progressPercentage="80%"> lime</Progress>
export const red = () => <Progress variant='red' progressPercentage="80%"> red</Progress>
export const orange = () => <Progress variant='orange' progressPercentage="80%"> orange</Progress>