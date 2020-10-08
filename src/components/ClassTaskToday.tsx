import React from 'react';
import { getDateToday } from '../dateGetters';
import { View, StyleSheet, Text, Image } from 'react-native';

import classTasks from '../static/texts/classTasks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function getTask(date: string) {
    var res;
    classTasks.forEach(item => {
        if (item.date == date)
            res = item;
    });

    if (res == undefined || res == null)
        res = {title: "Inget!", text: "Idag får ni inget uppdrag. Kom tillbaka någon annan dag!"};
    return res;
}

const ClassTaskToday = () => {
    const date = getDateToday();
    const task = getTask(date);

    const navigation = useNavigation<StackNavigationProp<StackScreens>>();

    return(
        <View style={style.container}>
            <View style={style.bubble}>
                <Text style={style.bubbleHeader}>Dagens klassuppdrag</Text>
                <Text style={style.bubbleTitle}>{task.title}</Text>
                <Text style={style.bubbleText} numberOfLines={4}>{task.text}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ClassTasks')}>
                    <Text style={style.readMore}>LÄS MER</Text>
                </TouchableOpacity>
            </View>
            <Image source={require("../static/images/tent_notes.png")} style={style.image} />
        </View>
    )
}
export default ClassTaskToday;

const style = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
    },
    image: {
        resizeMode: 'contain',
        height: 280,
        width: '40%',
        position: 'absolute',
        right: '0%',
        bottom: '-25%',
        zIndex: -1,
    },
    bubble: {
        width: '75%',
        height: 145,
        elevation: 2,
        backgroundColor: '#342A3B',
        borderColor: '#FFB01C',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bubbleHeader: {
        fontSize: 20,
        color: '#FFB01C',
    },
    bubbleText: {
        fontSize: 13,
        color: 'white',
        width: '90%',
        textAlign: 'center',
    },
    bubbleTitle: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
    },
    readMore: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFB01C',
    }
})
