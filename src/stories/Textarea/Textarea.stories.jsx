import react from "react";
import Textarea from "../../components/Textarea/Textarea";
import '../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Textarea",
    component: Textarea,
};

export const TextareaDesign = () => <Textarea name="Textarea" rows="5" placeholder="Message"></Textarea>