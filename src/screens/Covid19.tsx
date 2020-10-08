// The Covid19 screen contains information about how the reception handles the covid19 crisis.
// It's found under "Information".

import React from 'react';
import { Linking, Dimensions, SafeAreaView, View, StyleSheet, ScrollView, Text } from 'react-native';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';

const SponsorHeader = () => (
    <View style={{ marginBottom: 15 }}>
        <Text style={style.title}>Mottagningen och Covid-19</Text>
        <Divider color={'white'} width={WIDTH - 20} />
    </View>
);

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SponsorScreen = () => {
    return (
        <SafeAreaView style={style.safeContainer}>
            <TDHeader />
            <ScrollView style={{ flex: 1, backgroundColor: '#342A3B' }}>
                <View style={{ marginHorizontal: 15 }}>
                    <SponsorHeader />
                    <Text style={style.infoText}>
                        Teknolog- och Datavetarmottagningen arbetar hårt för att göra en mottagning för att välkomna alla teknologer och datavetare till Uppsala och studentlivet. Under de rådande omständigheterna krävs dock att alla hjälps åt för att göra Mottagningen så bra som möjligt för alla inblandade.{'\n\n'}
                        Detta innebär att det är oerhört viktigt att en följer råden från Folkhälsomyndigheten som kan hittas <Text style={{ color: 'lightblue', fontWeight: 'bold' }} onPress={() => Linking.openURL('https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/skydda-dig-och-andra/')}>här</Text> och riktlinjerna från Uppsala universitet som kan hittas <Text onPress={() => Linking.openURL('https://www.uu.se/student/rekommendationer-om-coronaviruset/')} style={{ color: 'lightblue', fontWeight: 'bold' }}>här.</Text> Nedan listar vi även en del saker som är extra viktiga att tänka på under just TD-mottagningens arrangemang.{'\n\n'}
                        - Stanna hemma även om du bara känner dig lite förkyld.{'\n'}
                        - Tvätta händerna ofta med tvål och vatten i minst 20 sekunder. Sprita händerna ofta.{'\n'}
                        - Håll avstånd till andra både inomhus och utomhus.{'\n'}
                        - Håll dig till din klass under mottagningsaktiviteter och håll dig till utsatt plats för din klass och aktivitet.{'\n'}
                        - Respektera de kösystem som utformats av TD-mottagningen på mottagningsområdet.{'\n'}
                        - Håll dig till ditt schema och var inte på Mottagningens område om du inte är schemalagd att vara där.{'\n'}
                        - Ta gärna med kall mat till lunch för att minimera microköer{'\n\n'}
                    Det är ytterst viktigt att en även lyssnar på de mottagninsansvarigas direktiv under Mottagningen. Om inte ovanstående riktlinjer och direktiv efterföljs riskerar en att bli avstängd från Mottagningen alternativt att hela evenemang riskerar att ställas in. Dessa riktlinjer och direktiv finns för er och arrangörernas säkerhet och välmående.</Text>
                </View>
            </ScrollView >
        </SafeAreaView>
    );
};

export default SponsorScreen

const style = StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        color: '#342A3B',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#342A3B',
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
