import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { openingHours } from '../../static/texts/openingHours_recceCentral';
import TDHeader from '../../components/TDHeader';
import { getDateToday } from '../../dateGetters';
import TDFooter from '../../components/TDFooter';


const OpeningHours = () => {
    const today = getDateToday();
    return(
        <SafeAreaView style={style.background}>
            <TDHeader />
            <View style={style.wrapper}>
                <View style={style.container}>
                    <Text style={style.title}>Reccentralens öppettider</Text>
                    <FlatList
                        style={{width: '100%'}}
                        data={openingHours}
                        keyExtractor={(day) => day.date}
                        renderItem={({ item }) => (
                            <View style={style.itemContainer}>
                                <View style={style.itemLeft}>
                                    <Text style={item.date == today ? style.itemTextBold : style.itemText}>{item.day} </Text>
                                    <Text style={item.date == today ? style.itemTextBold : style.itemText}>{item.date}</Text>
                                </View>
                                <View style={style.itemSeparator}></View>
                                <View style={style.itemRight}>
                                    <Text style={item.date == today ? style.itemTextBold : style.itemText}>{item.open == "STÄNGT" ? item.open : item.open+"-"}</Text>
                                    <Text style={item.date == today ? style.itemTextBold : style.itemText}>{item.close}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
            <TDFooter/>
        </SafeAreaView>
    )
}
export default OpeningHours;

const style = StyleSheet.create({
    background: {
        backgroundColor: "#342A3B",
        flex: 1,
    },
    wrapper: {
        flex: 1,
        padding: '4%'
    },
    container: {
        backgroundColor: '#15B700',
        width: '100%',
        height: '100%',
        padding: '5%',
    },
    title: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '4%',
    },
    itemContainer: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
    },
    itemLeft: {
        height: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    itemRight: {
        height: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    itemText: {
        color: 'white',
        fontSize: 16,
        textAlignVertical: 'center'
    },
    itemTextBold: {
        color: 'white',
        fontSize: 16,
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
    itemSeparator: {
        flex: 1,
    }
})
