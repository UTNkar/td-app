// The ActivityList screen is the screen that displays all activites. It is found by navigating to "Aktiviteter" through the side menu.
// Activities are generated from the statically from the source file activities.

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from 'react-native';
import TDHeader from '../components/TDHeader';
import TDFooter from '../components/TDFooter';
import Divider from '../components/Divider';
import ActivityScreen from '../screens/ActivityScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { activities } from '../static/texts/activities';
const WIDTH = Dimensions.get('window').width;

const ActivityStack = createStackNavigator();

const ActivityList = ({ navigation }) => {
    return (
        <SafeAreaView style={style.background}>
            <TDHeader />
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Text style={style.title}>
                            Aktiviteter
                        </Text>
                        <View style={style.line}>
                            <Divider color='#F71FFF' width='100%' />
                        </View>
                        <Text style={style.text} >
                            {`Ååååh vad är väl en mottagning i Uppsala om inte fulländat fylld med Mulltifunktionella aktiviteter för att Reccarna ska lära känna varandra och få en åååh så bra start på studentlivet! Reccen kanske kan ta en titt här för att lära sig allt om de Mulltidimensionellt matrixiga aktiviteter som Reccen ta del av under mottagningen!
`}
                        </Text>
                    </View>
                }
                ListFooterComponent={TDFooter}
                numColumns={1}
                data={activities}
                keyExtractor={ (_item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginHorizontal: 15 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("ActivityScreen", { activity: item })}
                                      style={style.activityItemBox}>
                        <Text style={{...style.activityItem}}>{item.name}</Text>
                        <View style={{ flex: 1 }}/>
                        <Text style={{...style.activityItem}}>{item.dates &&
                                                               (Object.keys(item.dates).length > 4
                                                               ? 'Flera dagar'
                                                               : Object.keys(item.dates)?.join(', '))}</Text>
                    </TouchableOpacity>
                    <Divider color={'#707070'} width='100%' />
                    </View>
                )}
            />
        </SafeAreaView>
    )
};

export const Activities = () => {

    return (
        <ActivityStack.Navigator headerMode={'none'} initialRouteName="ActivityList">
            <ActivityStack.Screen name='ActivityList' component={ActivityList}/>
            <ActivityStack.Screen name='ActivityScreen' component={ActivityScreen}/>
        </ActivityStack.Navigator>)
}


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
    },
    box: {
        paddingTop: 20,
        paddingBottom: 14
    },
    image: {
        alignSelf: 'center',
        height: (WIDTH - 30) * 0.27,
        width: WIDTH - 30
    },
    activityItemBox: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    activityItem: {
        fontSize: 16,
        lineHeight: 19,
        color: '#FF71FF'
    }
});
