import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const TDDrawerContent = (props: any) => {
    return (
        <ImageBackground style={style.backgroundImg} source={require('../static/images/stars.png')}>
            <View style={style.filter}>
                <View style={style.container}>
                    <View style={style.header}>
                        <Image style={style.headerImg} source={require('../static/images/TDettarrUTN.png')} />
                    </View>

                    <DrawerContentScrollView indicatorStyle={'white'} style={style.scrollView}>
                        <DrawerItemList {...props} />
                        <View style={style.bottomseparator}></View>
                    </DrawerContentScrollView>

                    <View style={style.footer}>
                        <Image style={style.footerImg} source={require('../static/images/poweredByDka.png')}/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
export default TDDrawerContent;

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '4%',
        backgroundColor: 'rgba(00, 00, 00, 0.4)',
        alignItems: 'center'
    },
    bottomseparator: {
        height: 10
    },
    backgroundImg: {
        flex: 1,
        resizeMode: "cover",
        overflow: 'hidden',
    },
    headerImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    footerImg: {
        width: '75%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    filter: {
        backgroundColor: 'rgba(00, 00, 00, 0.0)'
    },
    header: {
        width: '100%',
        height: '30%',
        padding: '5%'
    },
    headerText: {
        flex: 1,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        flex: 1,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    scrollView: {
        width: '100%',
        height: '60%',
    },
})
