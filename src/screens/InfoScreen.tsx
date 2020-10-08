import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from 'react-native';
import TDHeader from '../components/TDHeader';
import TDFooter from '../components/TDFooter';
import Divider from '../components/Divider';
import { infoText } from '../static/texts/informationText.ts'

const WIDTH = Dimensions.get('window').width;

const group = [
    { name: 'Mottagningen och Covid-19', url: require('../static/images/info/covid.jpg'), key: '0' },
    { name: 'Klassuppdrag', url: require('../static/images/activities/Klassuppdrag.jpg'), key: '9' },
    { name: 'Reservera biljett', url: require('../static/images/info/Rersarvera_biljett.png'), key: '1' },
    { name: 'Reccentralen', url: require('../static/images/info/Reccentralen.png'), key: '2' },
    { name: 'Recce-enkäten', url: require('../static/images/activities/Förkör.jpg'), key: '3' },
    { name: 'Tältet', url: require('../static/images/info/Taltet.png'), key: '4' },
    { name: 'Nationer', url: require('../static/images/info/Nationer.png'), key: '5' },
    { name: 'Hitta rätt', url: require('../static/images/info/Hitta_ratt.jpg'), key: '6' },
    { name: 'Sponsorer', url: require('../static/images/info/Sponsorer.jpg'), key: '7' },
    { name: 'Om UTN', url: require('../static/images/info/Om_UTN.jpg'), key: '8' }
];

const InfoScreen = ({ navigation }) => {
    const pressHandler = (id: string) => {
        switch (id) {
        case ('0'):
            navigation.navigate('Covid19')
            break;
        case ('1'):
            navigation.navigate('Reservera biljetter')
            break;
        case ('2'):
            navigation.navigate('Reccentralen')
            break;
        case ('3'):
            navigation.navigate('Recceenkaten')
            break;
        case ('4'):
            navigation.navigate('Tältet')
            break;
        case ('5'):
            navigation.navigate('Nationer')
            break;
        case ('6'):
            navigation.navigate('Hitta rätt')
            break;
        case ('7'):
            navigation.navigate('Sponsorer')
            break;
        case ('8'):
            navigation.navigate('Utn')
            break;
        case ('9'):
            navigation.navigate('Klassuppdrag');
        default:
            break;
        }
    }

    return (
        <SafeAreaView style={style.background}>
            <TDHeader />
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Text style={style.title}>
                            Information
                        </Text>
                        <View style={style.line}>
                            <Divider color='#FFFFFF' width='100%' />
                        </View>
                        <Text style={style.text} >
                            {infoText}
                        </Text>
                    </View>
                }
                ListFooterComponent={TDFooter}
                numColumns={1}
                data={group}
                renderItem={({ item }) => (
                    <View>
                        <View style={style.box}>
                            <TouchableOpacity style={style.shadow} onPress={() => pressHandler(item.key)}>
                                <Image style={style.image} source={item.url} />
                            </TouchableOpacity>
                            <Text style={style.name}>{item.name}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        flex: 1,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 27,
        paddingTop: 30,
        fontWeight: 'bold',
    },
    line: {
        margin: 15,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 15,
        marginRight: 15,
    },
    name: {
        color: 'white',
        fontSize: 18,
        marginLeft: 30,
        fontWeight: "500",
        position: 'absolute',
        bottom: 0,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30,
        elevation: 10,
    },

    box: {
        paddingTop: 20,
        paddingBottom: 14
    },
    image: {
        alignSelf: 'center',
        height: (WIDTH - 30) * 0.27,
        width: WIDTH - 30,
    },
    shadow: {
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }
});
export default (InfoScreen);
