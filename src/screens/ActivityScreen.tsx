// The ActivityScreen screen shows a single activity in full view. It is found by navigating either through
// pressing an activity on the home screen, or by navigating to "Aktiviteter" and pressing an activity.

import React from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions, Text, Image } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
import TDHeader from '../components/TDHeader';
import TDFooter from '../components/TDFooter';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getActivityImage } from '../imageGetters';

const HEIGHT = Dimensions.get('window').height;

const ActivityScreen = (props) => {
    const activity = props.route.params.activity;
    const dates = activity.dates && Object.keys(activity?.dates).join(', ')
    const imgRef = getActivityImage(activity.img);

    return (
        <SafeAreaView style={style.wrapper}>
            <TDHeader/>
            <ScrollView style={style.wrapper}>
                <View style={style.image}>
                    <Image source={imgRef} style={style.image} />
                </View>
                <View style={style.textContainer}>
                    <View style={style.infoBox}>
                        <Text style={style.name}>{activity.name}</Text>
                        <Text style={style.time}>{dates}{dates && '\n'}{activity.start !== '' || activity.end !== '' ? "tid:" : ""} {activity.start}</Text>
                        {activity.place && (<View style={style.placeContainer}>
                                                <Icon name={'map-marker'} color={'#FF71FF'} size={20} style={{ marginRight: 4 }} />
                                                <Text style={style.place}>{activity.place}</Text>
                                            </View>)}
                        {activity.entryFee ? <Text style={style.time}>Entré: {activity.entryFee}</Text> : <View/> }
                    </View>
                    <View style={style.textBox}>
                        <Text style={{ ...style.infoText, fontWeight: 'bold' }}>Observera att det kan ske schemaändringar som inte syns här. Kolla ditt schema för säkerhets skull!</Text>
                        <Text selectable style={style.infoText}>{activity.text}</Text>
                    </View>
                </View>
                <ImageZoom style={{ margin: 0 }} imageWidth={screenWidth} imageHeight={1.40 * screenWidth} cropWidth={screenWidth} cropHeight={HEIGHT} minScale={1.0}>
                    <Image style={style.map} source={require('../static/images/info/Karta_APP.png')} />
                </ImageZoom>
            <TDFooter/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ActivityScreen;

const screenWidth = Dimensions.get("window").width;
const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    image: {
        height: screenWidth,
        width: screenWidth,
    },
    textContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
    },
    infoBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#FF71FF',
        paddingBottom: 10,
    },
    textBox: {
        paddingTop: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    time: {
        fontSize: 14,
        color: 'white',
    },
    place: {
        fontSize: 14,
        color: 'white',
    },
    placeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
    },
    infoText: {
        fontSize: 14,
        color: 'white',
    },
    map: {
        height: screenWidth * 1.40,
        width: screenWidth,
        resizeMode: 'contain'
    }
})
