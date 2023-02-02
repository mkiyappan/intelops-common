import react from "react";
import Button from "./Button";
import '../../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Button",
    component: Button,
};

export const contained = () => <Button variant='contained'> Contained</Button>
export const gradient = () => <Button variant='gradient'> gradient</Button>
export const outlined = () => <Button variant='outlined'> outlined</Button>
export const text = () => <Button variant='text'> text</Button>
// export const setIcon = () => <Button variant='setIcon'> setIcon</Button>