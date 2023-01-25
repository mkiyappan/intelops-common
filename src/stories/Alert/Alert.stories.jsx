import react from "react";
import Alert from "../../components/Alert/Alert";
import '../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Alert",
    component: Alert,
};

export const fuchsia = () => <Alert variant='fuchsia'> fuchsia</Alert>
export const slate = () => <Alert variant='slate'> slate</Alert>
export const lime = () => <Alert variant='lime'> lime</Alert>
export const red = () => <Alert variant='red'> red</Alert>
export const orange = () => <Alert variant='orange'> orange</Alert>
export const cyan = () => <Alert variant='cyan'> cyan</Alert>
export const gray = () => <Alert variant='gray'> gray</Alert>
export const darkGray = () => <Alert variant='darkGray'> darkGray</Alert>