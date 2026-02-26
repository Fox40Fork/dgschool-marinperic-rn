import { createBottomTabNavigator } from "react-navigation-tabs";
import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {Home}/>
            <Tab.Screen name = "About" component = {About}/>
            <Tab.Screen name = "Contact" component = {Contact}/>
        </Tab.Navigator>
    )
}