import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Platform,
    UIManager,
    StatusBar,
    Alert,
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import { Provider } from 'react-redux';
import { createStore, Dispatch } from 'redux';
import { Action, addNewsAction } from './src/redux/actionTypes';
import { News, DrawerScreens } from './src/types';
import appReducer from './src/redux/reducers';
import { getState, saveState } from './src/redux/state';

import MyScreen from './src/screens/MyScreen';
import HomeScreen from './src/screens/HomeScreen';
import ContactScreen from './src/screens/ContactScreen';
import SponsorScreen from './src/screens/SponsorScreen';
import { Activities } from './src/screens/ActivityList';
import ClassSelectionScreen from './src/screens/ClassSelectionScreen';
import TDScreen from './src/screens/TDScreen';
import InformationStack from './src/screens/InformationStack';

import TDDrawerContent from './src/components/TDDrawerContent';
import { timesstampConverter } from './src/dateGetters';

const Drawer = createDrawerNavigator<DrawerScreens>();

async function registerAppWithFCM() {
    if (Platform.OS === 'android')
        await messaging().registerDeviceForRemoteMessages();
}

async function requestUserPermission() {
  const authorizationStatus = await messaging().requestPermission();

  if (authorizationStatus) {
    console.log('Permission status:', authorizationStatus);
  }
}

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


registerAppWithFCM();
requestUserPermission();

const store = createStore(appReducer);

const dispatchNewsItem = (remoteMessage: FirebaseMessagingTypes.RemoteMessage): void => {

    const newsItem: News = {
        key: remoteMessage.messageId ?? 'no key',
        read: false,
        title: 'Ingen titel',
        body: 'Inget innehåll',
        sender: 'Ingen avsändare',
        // Ignore fail message here- it's the library which isn't exporting the type correctly.
        // @ts-ignore
        senderDate: remoteMessage.sentTime ? timesstampConverter(new Date(remoteMessage.sentTime)) : 'Inget datum',
        ...remoteMessage.notification,
        ...remoteMessage.data
    }
    store.dispatch(addNewsAction(newsItem));
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
    // This is needed for background messaging
    if (remoteMessage.notification) {
        dispatchNewsItem(remoteMessage);
    }
});

const MyStatusBar = () => <View style={{ height: Platform.OS === 'ios' ? 45 : StatusBar.currentHeight, backgroundColor: '#030304'}}><StatusBar translucent barStyle={'light-content'} backgroundColor={'#030304'}/></View>

const App = () => {
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
            // If we recieve a notification, it's likely news.
            // Might have to double check that later..
            // This only handles foreground messages.

            if (remoteMessage.notification) {
                dispatchNewsItem(remoteMessage);
                Alert.alert('Ny notifikation! Gå till notisvyn för att se den!')
            }
        })

        return unsubscribe
    }, [])

    var [loading, setLoading] = useState(true);

    const dispatch: Dispatch<Action<any>> = store.dispatch;

    if (loading) { // splashscreen
        getState(dispatch, () => { setLoading(false) })
        return (<View></View>)
    } else {
        const currentState = store.getState()
        saveState(currentState);
        return (
            <Provider store={store}>
                <MyStatusBar/>
                <NavigationContainer>
                    <Drawer.Navigator
                        drawerContent={TDDrawerContent}
                        drawerContentOptions={{
                            itemStyle: { ...style.item },
                            labelStyle: { ...style.label },
                            activeTintColor: 'white'
                        }}
                        initialRouteName={currentState.userClass == "" ? "Välj klass" : "Hem"}
                    >
                        <Drawer.Screen
                            name="Hem"
                            component={HomeScreen}
                        />
                        <Drawer.Screen
                            name="Min sida"
                            component={MyScreen}
                        />
                        <Drawer.Screen
                            name="Vi är mottagningen"
                            component={TDScreen}
                        />
                         <Drawer.Screen
                            name="Aktiviteter"
                            component={Activities}
                         />
                        <Drawer.Screen
                            name="Information"
                            component={InformationStack}
                        />
                        <Drawer.Screen
                            name="Kontakt"
                            component={ContactScreen}
                        />
                        <Drawer.Screen
                            name="Sponsorer"
                            component={SponsorScreen}
                            />
                        <Drawer.Screen
                            name="Välj klass"
                            component={ClassSelectionScreen}
                            options={{ gestureEnabled: false }}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
};

export default App;

const style = StyleSheet.create({
    item: {
        // backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
    },
    label: {
        color: 'white',
        fontSize: 20,
    },
    labelAct: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
})
