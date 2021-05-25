import React from 'react';
import { SafeAreaView, Dimensions, TouchableOpacity, Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import TDHeader from '../components/TDHeader';

const RecceCentralenHeader = () => (<View style={{ marginBottom: 50, flex: 1, width: '95%', alignSelf: 'center' }}>
    <Text style={style.title}>Reccentralen</Text>
</View >);

const Flags = () => (<Image source={require('../static/images/info/flaggor.png')}
    style={{ width: '100%', alignSelf: 'center', position: 'absolute', top: 10 }}
    resizeMode='contain'
/>)


const WIDTH = Dimensions.get('window').width;

const RecceCentralen = ({ navigation }) => {
    return (
        <SafeAreaView style={style.safeContainer}>
            <TDHeader />
            <ScrollView style={{ flex: 1, backgroundColor: '#342A3B' }}>
                <View style={{ marginHorizontal: 10 }}>
                    <RecceCentralenHeader />
                    <Flags />
                    <Text style={{ ...style.infoText, width: '95%' }}>
                        Om Reccen behöver gömma sig undan paddastrofväder, känner sig hungrig eller inte känner sig så hoppedundrig finns den tidlöst bra Reccentralen som finns till för endast Reccen. Reccen kan här införskaffa sig tidernas Spännkort, ett Partykit eller biljetter till roliga kvällar såsom Klassfest.{'\n\n'}
                        Reccen kan här införskaffa sig tidernas <Text style={{ color: '#FFB01C', fontWeight: 'bold' }}>Spännkort</Text>, ett <Text style={{ color: '#FF71FF', fontWeight: 'bold' }}>Partykit</Text> eller <Text style={{ color: '#15B700', fontWeight: 'bold' }}>biljetter</Text> till roliga kvällar så som Klassfest och Finalgasque.
                    </Text>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => navigation.push('OpeningHours')}>
                        <Text style={style.buttonTextSmall}>Reccentralens</Text>
                        <Text style={style.buttonText}>öppettider</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../static/images/info/Reccentralen_FULL.png')}
                    style={{ width: WIDTH, height: WIDTH * 0.69, marginBottom: 40 }} />
                <View style={{ paddingHorizontal: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...style.infoText, width: '70%' }}>
                        Om Reccen har grodkrastinerat och inte fixat sina matlådor kan man såklart köpa lite lättare pluttiskuttig <Text style={{ color: '#FF71FF', fontWeight: 'bold' }}>förtäring</Text>. Det erbjuds frysmat, läsk, glass och fika. Reccen får inte heller missa den multidimensionella bra <Text style={{ color: '#FFB01C', fontWeight: 'bold' }}>uteplatesen</Text> där Reccen kan hämta andan eller kväka med sina nya kompisar. För denna <Text style={{ color: '#FFB01C', fontWeight: 'bold' }}>uteplats</Text> är en skyddad dimension och Reccen är skyddad från universums endimensionella strängar.{'\n'}
                    </Text>
                    <Image source={require('../static/images/info/glass.png')} style={{ width: '20%', height: '135%', marginRight: 15, alignSelf: 'center', resizeMode: 'contain' }} />
                </View>
                <View style={{ marginHorizontal: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image source={require('../static/images/info/spelkontroll.png')} style={{ width: 100, alignSelf: 'center', height: '100%', marginBottom: 30, resizeMode: 'contain' }} />
                    <Text style={{ ...style.infoText, width: '75%', textAlign: 'right', marginRight: 15 }}>
                        Är Reccen i disträ är det bara att utbrista ”Hjälp mig <Text style={{ color: '#FF71FF', fontWeight: 'bold' }}>Fadderkå</Text> eller <Text style={{ color: '#15B700', fontWeight: 'bold' }}>Mediakå</Text>, ni är mitt enda hopp!” så kommer <Text style={{ color: '#FF71FF', fontWeight: 'bold' }}>Fadderkå</Text> och <Text style={{ color: '#15B700', fontWeight: 'bold' }}>Mediakå</Text> på studs till undsättning då det alltid finns någon av dem på plats i Reccentralen.{'\n\n'}
                    </Text>
                </View>
            </ScrollView >
        </SafeAreaView>
    );
};

export default RecceCentralen;

const style = StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        color: '#342A3B',
    },
    button: {
        backgroundColor: '#15B700',
        width: 150,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowRadius: 10,
        margin: 40,
        padding: 4
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
    buttonTextSmall: {
        fontSize: 16,
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
    safeContainer: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
})
