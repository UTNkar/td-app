import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text
} from 'react-native';
import Divider from './Divider';
import ClassSelectionItem from './ClassSelectionItem';
import { Section } from '../types'

const WelcomeText = (): JSX.Element => (
    <View style={style.welcomeWrapper}>
        <Text style={style.welcomeText}>Välkommen till{"\n"}Teknolog- och Datavetarmottagningen{"\n"}på Uppsala Universitet!</Text>
        <Text style={style.chooseYourProgramText}>Välj program och klass:</Text>
        <Divider color='#707070' width='90%' />
    </View>);

export default function ClassSelectionList(props: { sections: Array<Section> }): JSX.Element {
    const [currentSelected, setCurrentSelected] = useState("");

    const toggleCurrentSelected = (section: string) => {
        if (currentSelected === section) {
            setCurrentSelected("");
        } else {
            setCurrentSelected(section);
        }
    }

    return (<FlatList
        data={props.sections}
        keyExtractor={(section: Section, key: number) => key.toString()}
        renderItem={({ item }) => (<ClassSelectionItem section={item.sectionName}
            sectionFullName={item.sectionFullName}
            classes={item.classes}
            currentSelected={currentSelected}
            setCurrentSelected={toggleCurrentSelected} />)}
                ListHeaderComponent={WelcomeText}
                ListFooterComponent={<View style={{ marginBottom: 80 }}/>}
    />);
};

const style = StyleSheet.create({
    welcomeText: {
        color: '#FF71FF',
        textAlign: 'center',
        fontSize: 18,
        paddingBottom: 60,
        lineHeight: 40,
    },
    welcomeWrapper: {
        paddingVertical: 40,
    },
    chooseYourProgramText: {
        color: '#41FFF8',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 40,
    },
});
