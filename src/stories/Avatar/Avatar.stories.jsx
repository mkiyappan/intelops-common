import react from "react";
import Avatar from "../../components/Avatar/Avatar";
import '../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Avatar",
    component: Avatar,
};

export const square = () => <Avatar variant='square'
    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg"
    alt="avatar image" />
export const rounded = () => <Avatar varient="rounded"
    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg"
    alt="avatar image" />