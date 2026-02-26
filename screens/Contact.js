import React from 'react';
import { Text, View, Button} from 'react-native';

const Contact = ({navigation,}) => (
    <View>
        <Text>Contact Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
    </View>
);

export default Contact;