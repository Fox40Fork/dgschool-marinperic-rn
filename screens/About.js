import React from 'react';
import { Text, View, Button, Swiper, Image} from 'react-native';

const About = ({navigation,}) => (
    <View>
        <Text>Welcome to About Screen!</Text>
        <Text>Here's 3 things about my app:</Text>
        <Text>1. It glazes Fernando Alonso</Text>
        <Text>2. It says that Fernando will win the next 2 WDCs</Text>
        <Text>3. It says that Fernando is the GOAT</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>

        <View>
            <Swiper
                autoplay 
                activeDotColor = "#22D4FF"
                autoplayTimeout = {5}
                loop = {true}
            >
                <View>
                    <Image 
                        source={require("../assets/fernando.jpg")}
                    />
                    <Image 
                        source={require("../assets/nandoo.jpg")}
                    />
                </View>
        
            </Swiper>
        </View>
    </View>
);

export default About;