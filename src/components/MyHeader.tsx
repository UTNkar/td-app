import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { openingHours } from '../static/texts/openingHours_recceCentral';
import { getDateToday } from '../dateGetters';
import { getSectionImage } from '../imageGetters';
import BadgedImage from './BadgedImage';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerScreens } from '../types';

import { connect } from 'react-redux';
import { State } from '../types';

function getTimes(date: string) {
    var res;
    openingHours.forEach(item => {
        if (item.date == date)
            res = [item.open, item.close];
    });
    if (res == null || res == undefined)
        res = ["STÄNGT", "STÄNGT"];

    return res;
}

const Envelope = () => (
    <View style={{ paddingLeft: 20 }}>
        <Icon name='envelope' size={40} color={'white'} type={'font-awesome'} style={'fas'}/>
    </View>)
const MyHeader = (props: any) => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerScreens>>();
    const sectionName = props.userSection;
    const sectionImg = getSectionImage(sectionName);

    const date = getDateToday();
    const times = getTimes(date);

    return(
        <View style={style.container}>
            <View style={style.leftContent}>
                <View style={style.openingHoursTextBox}>
                    <Text style={style.openingHoursText}>Reccentralens{"\n"}öppettider idag</Text>
                </View>
                <View style={style.openingHoursBox}>
                    <Text style={style.openingHours}>{times[0]}</Text>
                    <Text style={style.openingHours}>{times[1]}</Text>
                </View>
            </View>

            <View style={style.separator}></View>

            <View style={style.rightContent}>
                <View style={style.imageContainer}>
                    <TouchableOpacity style={style.image} onPress={() => navigation.navigate('Min sida')}>
                        <Image source={sectionImg} style={style.image}/>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    { props.unreadNews ?  <BadgedImage img={<Envelope/>} radius={15}/> : <Envelope/> }
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state: State) => ({
    userClass: state.userClass,
    userSection: state.userSection,
    unreadNews: state.news.reduce((acc, newsItem) => (!newsItem.read || acc), false)
})
export default connect(mapStateToProps)(MyHeader);

const style = StyleSheet.create({
    container: {
        minHeight: 60,
        backgroundColor: '#342A3B',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1, // workaround to show bottom border
    },
    leftContent: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    openingHours: {
        color: '#FF71FF',
        fontWeight: 'bold',
    },
    openingHoursTextBox: {
        padding: 15,
        alignContent: 'flex-start',
    },
    openingHoursText: {
        textAlign: 'left',
        color: '#707070',
        fontWeight: 'bold',
    },
    separator: {
        flex: 1,
    },
    rightContent: {
        height: '100%',
        flexDirection: 'row',
        paddingRight: 15,
        alignItems: 'center',
    },
    imageContainer: {
        padding: 6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        overflow: 'hidden',
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'contain'
    },
    imageText: {
        fontSize: 14,
        color: 'white',
    },
});
