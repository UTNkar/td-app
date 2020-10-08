import React from 'react';
import { Dimensions, SafeAreaView, TouchableOpacity, Linking, View, StyleSheet, ScrollView, Text } from 'react-native';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';

const SponsorHeader = () => (
    <View style={{ marginBottom: 15 }}>
        <Text style={style.title}>Recce-enkäten</Text>
        <Divider color={'white'} width={WIDTH - 20} />
    </View>
);

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const RecceenkatenScreen = () => {
    return (
        <SafeAreaView style={style.safeContainer}>
        <ScrollView style={{ flex: 1, backgroundColor: '#342A3B' }}>
            <TDHeader />
            <View style={{ marginHorizontal: 10 }}>
                <SponsorHeader />
                <Text style={style.infoText}>Här kan Reccen med fördel fylla i välfräst information om Reccen själv som kan vara viktig för Teknolog- och Datavetarmottagningen att veta. Reccen får här även chansen att uttrycka övriga intressen, åsikter och sin allmänna syn på livet, mulligt intressant för Rekå. Viktigast är såklart att Reccen fyller i sina kontaktuppgifter och telefonnummer till kriskontakter. För att komma till enkäten klickar du på knappen här nedan. Ses på andra sidan kryphålet!</Text>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => Linking.openURL('https://docs.google.com/forms/d/1RzN-Rsg-wwNYedqcB11mu85dFsZaGGOZU553nV6lyF8/viewform?edit_requested=true')}>
                    <Text style={style.buttonText}>Recce-enkäten</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
        </SafeAreaView>
    );
};

export default RecceenkatenScreen

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
