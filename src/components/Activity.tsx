import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getActivityImage } from '../imageGetters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Activity = (props) => {
    const imgRef = getActivityImage(props.activity.img);

    const navigation = useNavigation<StackNavigationProp<StackScreens>>();

    return (
        <TouchableOpacity style={style.container}
            onPress={() => navigation.navigate('Activity', props)}>
            <View style={style.container}>
                <View style={style.image}>
                    <Image source={imgRef} style={style.image} />
                </View>
                <Text style={style.name}>{props.activity.name}</Text>
                <Text style={style.time}>Idag {props.date} {props.activity.start && `- ${props.activity.start}`}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Activity;

const style = StyleSheet.create({
    container: {
        height: '100%',
        width: 240,
        marginRight: 14,
    },
    image: {
        height: 120,
        width: '100%',
        borderRadius: 10,
    },
    name: {
        fontSize: 15,
        color: 'white'
    },
    time: {
        fontSize: 13,
        color: 'white'
    }
})
