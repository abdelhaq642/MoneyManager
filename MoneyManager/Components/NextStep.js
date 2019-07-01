import React from 'react';
import{ Button } from 'react-native';

const NextStep = props => {

    return(
        <Button color = 'green' title = "Next Step" onPress = {props.NextStepHandler}></Button>
    );

    

};

export default NextStep;


