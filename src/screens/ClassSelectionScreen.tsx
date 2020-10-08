// The ClassSelectionScreen screen is visible the first time you start the app, or by navigating
// to "Välj klass" in the menu.

import React, { useState, useCallback } from 'react';
import {
    Text,
    View,
    StyleSheet,
    BackHandler,
    ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import messaging from "@react-native-firebase/messaging";

import ClassSelectionList from '../components/ClassSelectionList';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DrawerScreens, Section, State } from '../types';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { saveState } from '../redux/state';
import { setUserClassPeople, userTokenAction } from '../redux/actionTypes';

type SendButtonProps = {
    active: boolean;
    onPress: () => void;
}

const SendButton = (props: SendButtonProps) => {
    return (
        <View style={style.sendButtonContainer}>
            <TouchableOpacity disabled={!props.active}
                onPress={props.onPress}
                style={props.active ? style.sendButton : {
                    ...style.sendButton,
                    backgroundColor: '#854689'
                }}>
                <Text style={props.active ? style.sendButtonText : { ...style.sendButtonText, color: '#857F89' }}>OK</Text>
            </TouchableOpacity>
        </View>
    );
}

const ClassSelectionScreen = (props) => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerScreens>>();

    const [loading, setLoading] = useState(true);
    const [sections, setSections] = useState<Section[]>([]);

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (props.userClass == "")
                    return true; // this disables the back button

                return false;
            }
            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [props.userClass]))

    async function fetchSections() {
        const sections = await firestore().collection('sections').get();


        const temp: Array<Section> = [];
        sections.forEach(doc => temp.push(doc.data() as Section));
        setSections([...temp].sort((a, b) => a.sectionName > b.sectionName ? 1 : -1));
        setLoading(false);
    }

    if (sections.length === 0) { // only refetch if needed
        /** This fetching is perhaps too deep-
         * it might be better to move it up to app-global levels.
         * In any case it should be written to storage.
         */
        fetchSections();
    }

    if (loading) {
        return (
            <View style={style.pageContainer}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={36} color={'white'}/>
                </View>
            </View>
        );
    } else {
        return (
            <View style={style.pageContainer}>
                <ClassSelectionList sections={sections} />
                <SendButton active={props.userClass != ''}
                    onPress={async () => {
                        props.updateClassPeople(props.userClass);
                        await props.setUserToken();
                        await saveState(props.state);
                        navigation.navigate('Hem');
                    }
                    } />
            </View>
        );
    }
};


const mapStateToProps = (state: State) => ({
    userClass: state.userClass,
    state: state,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateClassPeople: (className: string) => dispatch(setUserClassPeople(className)),
    setUserToken: async () => dispatch(userTokenAction(await messaging().getToken())),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassSelectionScreen);


const shadowProps = { elevation: 4 };
const style = StyleSheet.create({
    welcomeText: {
        color: '#FF71FF',
        textAlign: 'center',
        fontSize: 18,
        paddingBottom: 60,
        lineHeight: 40,
    },
    welcomeWrapper: {
        paddingTop: 40,
    },
    chooseYourProgramText: {
        color: '#41FFF8',
        textAlign: 'center',
        fontSize: 18,
    },
    divider: {
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        alignSelf: 'center',
        width: '90%',
        paddingBottom: 40
    },
    sendButtonContainer: {
        position: 'absolute',
        top: '90%',
        alignSelf: 'center',
    },
    sendButton: {
        borderRadius: 10,
        backgroundColor: '#FF71FF',
        width: 110,
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        ...shadowProps
    },
    sendButtonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    pageContainer: {
        backgroundColor: '#342A3B',
        flex: 1,
    },
    wrapper: {
        backgroundColor: '#342A3B',
    },
    plainText: {
        color: 'white',
    },
})
