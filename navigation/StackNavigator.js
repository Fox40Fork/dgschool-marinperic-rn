import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const MainStackNavigator = ({navigation,}) => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#FF6347"
        }
    }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Contact" component={Contact}/>
    </Stack.Navigator>
);

export default MainStackNavigator;
