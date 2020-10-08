/**
 * This file exports all common types needed.
 */
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type DrawerScreens = {
    "Hem": undefined;
    "Välj klass": undefined;
    "Min sida": undefined;
    "Information": undefined;
    "Notiser": undefined;
    "Vi är mottagningen";
    "ClassSelection": undefined;
    "Sponsors": undefined;
}

export interface Section {
    sectionName: string;
    sectionFullName: string;
    classes: Array<{ className: string }>;
}

export type News = {
    title: string;
    body: string;
    sender: string;
    senderDate: string;
    key: string;
    read: boolean;
}

export type UserClassPeople = {
    rk: string;
    fadderk: string;
    mediak: string;
    propp: string;
}

export type State = {
    userClass: string;
    userSection: string;
    userClassPeople: UserClassPeople;
    userToken: string;
    news: Array<News>;
}

export interface Event {
    name: string,
    who: [string],
    form: string,
    release: FirebaseFirestoreTypes.Timestamp | null,
    disappear: FirebaseFirestoreTypes.Timestamp | null
}
