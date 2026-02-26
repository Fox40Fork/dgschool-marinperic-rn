import React from 'react';
import { Text, View, Button} from 'react-native';

const About = ({navigation,}) => (
    <View>
        <Text>Welcome to About Screen!</Text>
        <Text>Here's 3 things about my app:</Text>
        <Text>1. It glazes Fernando Alonso</Text>
        <Text>2. It says that Fernando will win the next 2 WDCs</Text>
        <Text>3. Fernando</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
    </View>
);

export default About;