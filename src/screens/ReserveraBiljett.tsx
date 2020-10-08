import React, { useEffect } from 'react';
import {
    Dimensions,
    Image,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Text,
} from 'react-native';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';

const WIDTH = Dimensions.get('window').width;

const HeaderImage = ({ source }) => (<Image source={source}
    style={style.headerImage}
/>)
const infoText = "Klockan 08:00 dagen innan Reccens Klassfest kan en boka biljetter i TD-mottagningens app. Dessa biljetter ska sedan betalas i Reccentralen under samma dag. Biljetter som inte betalas innan Reccentralen stänger avregistreras. Observera att detta bara gäller Klassfester, biljetter till andra evenemang under TD-mottagningen går inte att boka i appen."

const ReserveTicketScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={style.safeContainer}>
            <TDHeader />
            <View style={style.container}>
                <ScrollView style={style.scroller}>
                    <HeaderImage source={require("../static/images/info/BiljettreservationFull.png")} />
                    <View style={style.top}>
                        <View>
                            <Text style={style.title}>Reservera biljetter</Text>
                        </View>
                    </View>
                    <Divider color={'white'} width={WIDTH - 30} />
                    <Text style={style.infoText}>
                        {infoText}
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ReserveTicketScreen
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
