import react from "react";
import Card from "../../components/Card/Card";
import StatsCard from "../../components/Card/StatsCard";
import '../../assets/style/soft-ui-dashboard-tailwind.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';


export default {
    title: "Card",
    component: Card,
};

export const CardDesign = () => <Card
    imageURL="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
    caption="Project #3"
    actionName="View Project"
    title="Modren"
    body="As Uber works through a huge amount of internal management turmoil." />

export const CardDesign1 = () => <StatsCard
    title={`Today's Money`} amount="$53,000" percentageChange="+55%" icon={<FontAwesomeIcon icon={faList} />} />