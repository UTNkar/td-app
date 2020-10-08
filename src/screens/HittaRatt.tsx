// The HittaRatt screen contains a map over the area.
// It's found under the Information tab in the menu.

import React from 'react';
import { SafeAreaView, Dimensions, Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';

const SponsorHeader = () => (
    <View style={{ marginBottom: 15 }}>
        <Text style={style.title}>Hitta rätt</Text>
        <Divider color={'white'} width={WIDTH - 20} />
    </View>
);

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SponsorScreen = () => {
    return (
        <SafeAreaView style={style.safeContainer}>
            <ScrollView style={{ flex: 1, backgroundColor: '#342A3B' }}>
                <TDHeader />
                <View style={{ marginHorizontal: 10 }}>
                    <SponsorHeader />
                    <Text style={style.infoText}>Har Reccen har svårt att hitta? Vilken tur att det finns en karta över ITC och Ångströms-området!</Text>
                </View>
                <ImageZoom imageWidth={WIDTH} imageHeight={1.45 * WIDTH} cropWidth={WIDTH} cropHeight={HEIGHT} minScale={1.0}>
                    <Image source={require('../static/images/info/Karta_APP.png')}
                           style={{ width: WIDTH, height: 1.45 * WIDTH }} />
                </ImageZoom>
            </ScrollView >
        </SafeAreaView>
    );
};

export default SponsorScreen

const style = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    background: {
        backgroundColor: '#342A3B',
        color: '#342A3B',
    },
    button: {
        backgroundColor: '#9424F4',
        width: 140,
        height: 43,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowRadius: 10,
        margin: 40,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
    headerText: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        color: 'white',
    },
    title: {
        textAlign: 'left',
        lineHeight: 33,
        fontSize: 27,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        marginBottom: 10,
    },
    infoText: {
        color: "white",
        fontSize: 14,
        lineHeight: 17,
    },
})
