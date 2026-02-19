import React from 'react';
import { Text, View, Button} from 'react-native';

const Home = ({navigation,}) => (
    <View>
        <Text>Welcome to Home Screen!</Text>
        <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
    </View>
);

export default Home;