import React, { useState } from 'react';

import TextField from './src/components/TextField/TextField';
import Button from './src/components/Button/Button';
import Alert from './src/components/Alert/Alert';
import Chip from './src/components/Chip/Chip';
import Progress from './src/components/Progress/Progress';
import Typography from './src/components/Typography/Typography';
import Textarea from './src/components/Textarea';
import Card from './src/components/Card';
import StatsCard from './src/components/Card/StatsCard';
import Collapse from './src/components/Collapse';
import Switch from './src/components/Switch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        console.log('handleChange value=>', e.target.value);
    };
    const handleSwitchChange = (state) => {
        console.log('Switch state =>', state);
    };
    return (
        <div>
            <TextField onChange={handleChange} variant="small" id="cdcf" />
            <Button varient="outlined">Button</Button>
            <Button>
                <FontAwesomeIcon icon={faList} />
            </Button>
            <Alert varient="slate">Helooovijhbnjkhjgvbn</Alert>
            <Progress varient="fuchsia" progressPercentage="100%" />
            <Typography variant="h6">Hello</Typography>
            <Textarea>Heloooo world</Textarea>
            <div style={{ display: 'flex' }}>
                <StatsCard title={`Today's Money`} amount="$53,000" percentageChange="+55%" icon={<FontAwesomeIcon icon={faList} />} />
            </div>
            <Card
                imageURL="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                caption="Project #2"
                title="Modren"
                body="As Uber works through a huge amount of internal management turmoil."
            />
            <div>
                <Collapse
                    summary="Quetion 1 - How do I order?"
                    details="We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
                />
            </div>
            <Switch checked onStateChange={handleSwitchChange} />
        </div>
    );
};
export default App;
