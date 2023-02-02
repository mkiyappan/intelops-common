import react from "react";
import Collapse from "./Collapse";
import '../../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Collapse",
    component: Collapse,
};

export const CollapseDesign = () => <Collapse summary="Accordion Summary" details="This is the Details of the Accordion"/>