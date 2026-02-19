import React from 'react';
import { Text, View, Button} from 'react-native';

const About = ({navigation,}) => (
    <View>
        <Text>Welcome to About Screen!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
    </View>
);

export default About;