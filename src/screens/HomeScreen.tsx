// The Home Screen is the initial screen, navigated to by pressing 'Home' in the menu.

import React, { useEffect }  from 'react';

import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import TDHeader from '../components/TDHeader';
import MyHeader from '../components/MyHeader';
import Tickets from  '../components/Tickets';
import ActivitiesTodayWheel from '../components/ActivitiesTodayWheel';
import ClassTaskToday from '../components/ClassTaskToday';
import TipOfTheDay from '../components/TipOfTheDay';

import ActivityScreen from './ActivityScreen';
import ClassTasksScreen from './MyScreen_Subcreens/ClassTasksScreen';
import TDFooter from '../components/TDFooter';
import NewsScreen from './NewsScreen';

const HomeScreen = () => {
    return(
        <SafeAreaView style={style.container}>
            <TDHeader borderHeight={0}/>
            <MyHeader/>
            <ScrollView>
                <View style={style.content}>
                    <ClassTaskToday />
                    <ActivitiesTodayWheel />
                    <Tickets />
                    <TipOfTheDay />
                </View>
                <TDFooter/>
            </ScrollView>
        </SafeAreaView>
    )
}

const HomeStack = createStackNavigator();

function HomeStackScreen({ navigation }) {
    return (
        <HomeStack.Navigator headerMode={'none'} initialRouteName="Home">
            <HomeStack.Screen name={'Home'} component={HomeScreen} />
            <HomeStack.Screen name={'Activity'} component={ActivityScreen} />
            <HomeStack.Screen name={'ClassTasks'} component={ClassTasksScreen} />
            <HomeStack.Screen name={'News'} component={NewsScreen} />
        </HomeStack.Navigator>
    )
}
export default HomeStackScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    content: {
        padding: '5%',
    }
})
