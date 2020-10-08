import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerScreens } from '../types';
import LinearGradient from 'react-native-linear-gradient';

const style = StyleSheet.create({
    header: {
        backgroundColor: '#342A3B',
        borderBottomColor: '#707070',
        position: 'relative',
        top: 0,
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
    },
    leftComponent: {
        height: 30,
        width: 24,
        marginBottom: 5,
    },
    tdImage: {
        width: 177,
        height: 40,
    },
    utnImage: {
        width: 145,
        height: 45,
    },
    headerButtonContainer: {
        backgroundColor: '#342A3B',
    },
    headerImages: {
        width: '90%',
        height: '90%',
    }
});

export default function TDHeader({ borderHeight = 0.5 }): JSX.Element {
    const navigation = useNavigation<DrawerNavigationProp<DrawerScreens>>();

    return (
        <ImageBackground source={require('../static/images/stars.png')} style={style.header}>
            <LinearGradient colors={['#00000000', '#342A3BFF']} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 10, alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={(): void => navigation.openDrawer()}>
                    <View style={style.leftComponent}>
                        <Icon name="bars" color="white" size={30}/>
                    </View>
                </TouchableOpacity>
                <View style={style.tdImage}>
                    <Image source={require('../static/images/utn/td.png')}
                           style={style.headerImages}
                           resizeMode='contain'/>
                </View>
                <View style={style.utnImage}>
                    <Image source={require('../static/images/utn/arrangement_utn.png')}
                           style={style.headerImages}
                           resizeMode='contain'/>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}
