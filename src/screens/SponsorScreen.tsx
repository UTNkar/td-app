import React from 'react';
import { SafeAreaView, Image, View, StyleSheet, FlatList, Text } from 'react-native';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';
import SponsorImages from '../static/images/sponsors/'
import LinearGradient from 'react-native-linear-gradient';

const SponsorHeader = () => (
    <LinearGradient colors={['#342A3B', '#fff']} start={{ x:0.0, y:0.2}} end={{ x: 0.0, y:1.0}}>
        <View style={{ paddingBottom: 40, flex: 1, width: '95%', alignSelf: 'center' }}>
            <Text style={style.title}>Sponsorer</Text>
            <Divider color='white' width='100%' />
        </View>
    </LinearGradient>
);

const LargeSponsor = () => (<Image source={SponsorImages['brodyrMarken']}
                                   style={{ width: '90%', height: 300, alignSelf: 'center', marginBottom: 70 }}
                                   resizeMode='contain'
                            />)

const SponsorScreen = () => {
    const sponsorImages = [
        <Image source={SponsorImages['hertz']}
               style={{ width: '100%', height: 120 }}
               resizeMode='contain'
        />,
        <Image source={SponsorImages['hairStudio']}
               style={{ width: '100%', height: 120 }}
               resizeMode='contain'
        />,
        <Image source={SponsorImages['hors']}
               style={{ width: '100%', height: 120 }}
               resizeMode='contain'
        />,
        <Image source={SponsorImages['hedvig']}
               style={{ width: '100%', height: 120 }}
               resizeMode='contain'
        />,
        <Image source={SponsorImages['campus']}
               style={{ width: '100%', height: 120 }}
               resizeMode='contain'
        />,
        <Image source={SponsorImages['zerva']}
               style={{ width: '100%', height: 120 }}
               resizeMode='contain'
        />,
    ];

    return (
        <SafeAreaView style={style.safeContainer}>
        <View style={{ flex: 1 }}>
            <TDHeader/>
            <FlatList
                data={sponsorImages}
                keyExtractor={( _, index ) => index.toString()}
                renderItem={({ item }) => {
                    return (<View style={{ flex: 1, flexDirection: 'column', margin: 20 }}>
                                {item}
                            </View>)
                }}
                ListHeaderComponent={SponsorHeader}
                ListFooterComponent={LargeSponsor}
                numColumns={2}
                style={{ backgroundColor: 'white' }}
            />
        </View>
        </SafeAreaView>
    );
};

export default SponsorScreen

const style = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    screenContainer: {
        marginHorizontal: 15,
    },
    headerText: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        color: 'white',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30
    },
    title: {
        textAlign: 'center',
        lineHeight: 33,
        fontSize: 27,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        marginBottom: 10,
    }
})
