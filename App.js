import React, { useState } from 'react';

import TextField from './src/components/TextField/TextField';
import Button from './src/components/Button/Button';
import Alert from './src/components/Alert/Alert';
import Chip from './src/components/Chip/Chip';
import Progress from './src/components/Progress/Progress';
import Typography from './src/components/Typography/Typography';
const App = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        console.log('handleChange value=>', e.target.value);
    };
    return (
        <div>
            {/* <TextField onChange={handleChange} varient="large" id="cdcf" /> */}
            {/* <Button>Button</Button> */}
            <Alert varient="slate">Helooovijhbnjkhjgvbn</Alert>
            <Chip>Heloo</Chip>
            <Progress varient="fuchsia" progressPercentage="100%" />
            <Typography variant="h6">Hello</Typography>
        </div>
    );
};
export default App;
