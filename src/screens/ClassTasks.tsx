// The Class Tasks screen is a screen for displaying class tasks (klassuppdrag).
// It's navigated to through either pressing the classtask bubble on the home screen,
// or by pressing the class tasks square on "Min Sida".

import React from 'react';
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


const UtnScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={style.safeContainer}>
            <TDHeader />
            <View style={style.container}>
                <ScrollView style={style.scroller}>
                    <HeaderImage source={require('../static/images/activities/Klassuppdrag.jpg')} />
                    <View style={style.top}>
                        <View>
                            <Text style={style.title}>Klassuppdrag</Text>
                        </View>
                    </View>
                    <Divider color={'white'} width={WIDTH - 30} />
                    <Text style={style.infoText}>
                        Som del av Reccens hoppfulla vardag under första veckan på mottagningen har [tæ:sk] konstruerat riktigt grodifräcka klassuppdrag varje dag. Dessa uppdrag kan redovisas för valfri Mediakåit, Fadderkåit, Rekåit eller via klassens hoppedundrande instagramkonto för bonuspoäng till [tæ:sk]s och Binärs eminenta klassolympiad. Kanske kan bonus från klassuppdragen vara avgörande för att säkra vinst till Reccens klass. ÅÅh må såklart den bästa Recceklassen vinna!
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
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
        marginTop: 0,
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
