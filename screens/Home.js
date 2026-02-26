import React from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const Home = ({navigation,}) => (
    <View style = {styles.container}>
        <View style = {styles.sliderContainer}>
            <Swiper
                autoplay 
                activeDotColor = "#22D4FF"
                autoplayTimeout = {5}
            >
                <View style = {styles.Item}>
                    <Image 
                        source={require("../assets/carloz.jpg")}
                        style = {styles.imgItem}
                    />
                    <Image 
                        source={require("../assets/carloz.jpg")}
                        style = {styles.imgItem}
                    />
                    <Image 
                        source={require("../assets/carloz.jpg")}
                        style = {styles.imgItem}
                    />
                </View>

            </Swiper>
            <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    sliderContainer: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 8
    },
    imgItem: {
        width: "100%",
        height: "200%",
        borderRadius: 8
    }
})

export default Home;