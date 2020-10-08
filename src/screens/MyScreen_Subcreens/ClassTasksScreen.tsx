import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import TDFooter from '../../components/TDFooter';
import TDHeader from '../../components/TDHeader';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { getDateToday } from '../../dateGetters'
import classTasks from '../../static/texts/classTasks';

const ClassTaskItem = (props: any) => {
    const toggled = props.index === props.currentOpened;
    const faded = props.currentOpened !== null && !toggled;

    const itemTitleStyle = faded ? style.itemTitleFaded : style.itemTitle;
    const itemTextStyle = faded ? style.itemTextFaded : style.itemText;
    const itemExtraStyle = faded ? style.itemTextExtraFaded : style.itemTextExtra;

    return (
        <View style={style.itemContainer}>
            <Text style={itemTitleStyle}>{props.item.day} {props.item.date}</Text>
            <Text style={itemTitleStyle}>{props.item.title}</Text>
            {!toggled ? (
                <>
                    <Text numberOfLines={5} style={itemTextStyle}>{props.item.text}</Text>
                    <TouchableOpacity onPress={() => props.toggleOpened(props.index)} >
                        <Text style={style.readMore}>LÄS MER</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text style={itemTextStyle}>{props.item.text}</Text>
                    <Text style={itemExtraStyle}>{props.item.extratext}</Text>
                    <TouchableOpacity onPress={() => props.toggleOpened(props.index)} >
                        <Text style={style.readMore}>LÄS MINDRE</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    )
}

const ClassTasksScreen = () => {
    const [opened, setOpened] = useState(null);
    const today = getDateToday();

    const toggleOpened = (newIndex) => {
        if (opened == newIndex)
            setOpened(null);
        else setOpened(newIndex)
    }

    return (
        <SafeAreaView style={style.background}>
            <TDHeader />
            <View style={style.wrapper}>
                <View style={style.container}>
                    <FlatList
                        style={{ width: '100%' }}
                        data={classTasks.filter(task => (task.date <= today))}
                        keyExtractor={(day) => day.date}
                        renderItem={({ item, index }) => (
                            <ClassTaskItem toggleOpened={toggleOpened} currentOpened={opened} index={index} item={item} />
                        )}
                        ListHeaderComponent={<Text style={style.header}>Klassuppdrag</Text>}
                    />
                </View>
            </View>
            <TDFooter />
        </SafeAreaView>
    )
}
export default ClassTasksScreen;

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#342A3B',
        paddingTop: '4%',
        paddingHorizontal: '4%'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFB01C',
        padding: '4%'
    },
    header: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 20,
    },
    itemContainer: {
        borderColor: 'white',
        borderBottomWidth: 0.5,
        paddingVertical: '4%',
    },
    itemTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemTitleFaded: {
        opacity: 0.6,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemText: {
        color: 'white',
        fontSize: 14,
    },
    itemTextExtra: {
        padding: '4%',
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic',
    },
    itemTextFaded: {
        opacity: 0.6,
        color: 'white',
        fontSize: 14,
    },
    itemTextExtraFaded: {
        opacity: 0.6,
        padding: '4%',
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic',
    },
    readMore: {
        marginVertical: 4,
        alignSelf: 'flex-end',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})
