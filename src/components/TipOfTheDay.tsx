import React from 'react';
import { getDateToday } from '../dateGetters';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { tipOfTheDay } from '../static/texts/tipOfTheDay';

const TipOfTheDay = () => {
    const imgRef = require('../static/images/stars.png');

    const date = getDateToday() as keyof typeof tipOfTheDay;
    var text = tipOfTheDay[date];
    if (text == undefined || text == "")
        text = "Idag får ni inget tips. Kom tillbaka igen imorgon!";

    return(
        <View style={style.container}>
            <View style={style.background}>
                <ImageBackground source={imgRef} style={style.backgroundImage}>
                    <View style={style.textcontainer}>
                        <Text style={style.title}>TD tipsar!</Text>
                        <Text style={style.text}>{text}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={style.moleImage}>
                <Image source={require("../static/images/mole1.png")} style={{ width: '100%', height: '100%' }} />
            </View>
        </View>
    )
}
export default TipOfTheDay;

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        paddingVertical: '15%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        zIndex: 0
    },
    background: {
        width: '95%',
        height: '90%',
        borderRadius: 12,
        elevation: 5,
        zIndex: 0
    },
    backgroundImage: {
        borderRadius: 12,
        zIndex: 0,
        overflow: 'hidden',
        resizeMode: 'repeat'
    },
    moleImage: {
        height: 100,
        width: 100,
        position: 'absolute',
        bottom: '-10%',
        left: '-4%',
        zIndex: 10,
        elevation: 6
    },
    title: {
        color: '#41FFF8',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    textcontainer: {
        height: '100%',
        width: '100%',
        padding: '5%',
        alignContent: 'center',
        justifyContent: 'center'
    }
})
