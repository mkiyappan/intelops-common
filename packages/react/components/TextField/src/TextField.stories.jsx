import react from "react";
import TextField from "./TextField";
import '../../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "TextField",
    component: TextField,
};

export const small = () => <TextField variant='small' placeholder={'Small Text'}/>
export const defaultText = () => <TextField variant='default' placeholder={'default Text'}/>
export const large = () => <TextField variant='large' placeholder={'large Text'}/>
