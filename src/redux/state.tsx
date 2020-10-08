/**
   State is managed by Redux. The global state (called store in redux language) has properties, defined in
   the State interface.

   When modifying the state, change the interface. The typescript compiler will then warn wherever needed, if type
   annotations are used properly.
*/
import AsyncStorage from '@react-native-community/async-storage';
import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";
import { getUniqueId } from 'react-native-device-info';
import { News, State } from '../types';
import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes';
import { getClassPeople } from '../classInfoGetters';
import { userClassAction, userTokenAction, Action } from './actionTypes';

const stateEqual = (x: State, y: State) => {
    if (x.news && y.news) {
        for (let i = 0; i < x.news.length && i < y.news.length; ++i) {
            if (x.news[i] !== y.news[i]) return false;
        }
    }

    return (x.userClass === y.userClass &&
        x.userToken === y.userToken &&
        x.news?.length === y.news?.length)
}

export const saveState = async (state: State) => {
    let userState: string = "";

    console.log(state);

    try {
        userState = await AsyncStorage.getItem('userState') || "{}";
    } catch (error) {
        return; // I don't know what to do
    }

    const readState = JSON.parse(userState)
    if (stateEqual(state, { ...defaultState, ...readState})) {
        return;
    } else {
        console.log(state);
        try {
            const stringifiedState = JSON.stringify({...defaultState, ...state});
            await AsyncStorage.setItem('userState', stringifiedState);

            const docRef = await firestore().collection('users').doc(getUniqueId());
            docRef.set(state)
        } catch (error) {
            return; // I don't know what to do
        }
    }
}

const dispatchAll = async (dispatch: Dispatch<Action<any>>, state: State) => {
    dispatch(actionTypes.userClassAction(state.userClass));
    dispatch(actionTypes.userSectionAction(state.userSection));

    try {
        const token: string = await messaging().getToken();
        dispatch(actionTypes.userTokenAction(token));
    } catch (error) {
        console.log(error);
    }

    dispatch(actionTypes.mergeNewsAction(state.news));
    dispatch(actionTypes.setUserClassPeople(state.userClass));
}

export const getState = async (dispatch: Dispatch<Action<any>>, callback: () => void) => {
    let userStateString: string | null;

    try {
        const userStateSnapshot = await firestore().collection('users').doc(getUniqueId()).get();
        var readState = userStateSnapshot.data();

        if (readState != undefined) {
            const userState = { ...defaultState, ...readState }
            await dispatchAll(dispatch, userState);
        } else {
            userStateString = await AsyncStorage.getItem('userState');
            if (userStateString != null) {
                const readState = JSON.parse(userStateString);

                const userState = { ...defaultState, ...readState }
                await dispatchAll(dispatch, userState);
            } else {
                dispatchAll(dispatch, defaultState);
            }
        }

        // important: Dispatch userToken _again_
        // only surefire way to ACTUALLY fix the asynchronous bug
        // where the user userToken isn't being sent.

        callback();
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

const userClass = "";
const userSection = "";
const userClassPeople = {
    rk: '',
    rk2: '',
    fadderk: '',
    mediak: '',
    propp: '',
};
const userToken = "";
const news: Array<News> = [];

export const defaultState: State = { userClass, userSection, userClassPeople, userToken, news };
