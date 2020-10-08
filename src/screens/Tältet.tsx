import React from 'react';
import {
    Dimensions,
    Image,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';
import UtnImages from '../static/images/info/utn/';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const UtnScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={style.safeContainer}>
            <TDHeader />
            <View style={style.container}>
                <ScrollView style={style.scroller}>
                    <View style={style.top}>
                        <View>
                            <Text style={style.title}>Tältet</Text>
                        </View>
                    </View>
                    <Divider color={'white'} width={WIDTH - 30} />
                    <Text style={style.infoText}>
                        Efter en lång dag av vad den mullvastiska staden Uppsala har att erbjuda vill Reccen få
                        utlopp för all strålande energi som finns kvar i kroppen. Ett mullvigt ställe att göra detta på är
                        såklart det <Text style={{ fontWeight: 'bold', color: '#F365BB' }}>wUNDERbara</Text> Tältet.
                        Där kan Reccen släppa loss sina <Text style={{ fontWeight: 'bold', color: '#FFB01C' }}>mustiga dancemoves</Text> med
                        alla nyfunna vänner och i <Text style={{ fontWeight: 'bold', color: '#15B700' }}>Tältet</Text> finnerReccen även de mest mullviga barersom är rivigt
                        värda att besöka. Baren serverar mulleräna drycker, både med och utan alkohol så att
                        Reccen kan släcka sin skovliga hals ordentligt.
                    </Text>
                    <Image source={require('../static/images/info/Taltet.png')}
                        style={{ width: WIDTH, height: HEIGHT * 0.20, resizeMode: 'cover' }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={style.infoText}>
                            <Text style={{ color: '#FFB01C', fontWeight: 'bold' }}>Medtages{'\n'}</Text>
                            Giltigt ID{'\n'}
                            Recceband{'\n'}
                            Spännkort{'\n'}
                        </Text>
                        <Image source={require('../static/images/info/LegReccebandSpänn.png')} style={{
                            marginLeft: 40,
                            alignSelf: 'center',
                            width: WIDTH / 2,
                            height: (WIDTH / 2) * 0.35
                        }} />
                    </View>
                    <View style={{ backgroundColor: 'yellow' }}>
                        <Text style={{ margin: 15, fontWeight: 'bold' }}>
                            OBS! Reccen lämnar såklart medhavd alkohol hemma, på området finns ett
                            alkoholtillstånd som självklart ska tas omhand.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    );
};

export default UtnScreen
const style = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    container: {
        flex: 1,
        backgroundColor: '#342A3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroller: {
        flex: 1
    },
    headerImage: {
        height: WIDTH * 0.69,
        width: WIDTH,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    title: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 15,
        fontSize: 16,
        color: 'white',
        fontStyle: 'italic',
    },
    social: {
        flexDirection: 'row',
    },
    icon: {
        height: 30,
        width: 30,
        marginLeft: 13,
        marginTop: 10,
    },
    infoText: {
        color: 'white',
        margin: 15,
        fontSize: 14,
        lineHeight: 17,
    },
    button: {
        backgroundColor: '#084798',
        width: 140,
        height: 43,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowRadius: 10,
        margin: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    }
});
