// Information view regarding faddrar.
// It's found under 'Vi är mottagningen'

import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import TDHeader from '../components/TDHeader';

const Faddrar = (props) => {
    return (
        <SafeAreaView style={style.background}>
            <View>
                <TDHeader />
                <Image style={{height: 255, width: '100%',}} source={require('../static/images/WeAreTD/Fadder.jpg')} />
               <Text style={style.TitleText}>
                    Faddrar
                </Text>
                <View style={style.Line}/>
                <Text style={style.Text}>
                    Liksom ljuset i mörkret utstrålar Faddrarna glädje och energi. Ifall Reccen känner sig ensam, inte hittar till Proppen eller undrar över lite VADsomhelst finns Faddrarna alltid där för Reccen. Klädda i mullefräcka overaller sprider de blommor och kärlek och ser till att Reccen aldrig känner sig ensam i sin nya studentstad.
                </Text>
            </View>
        </SafeAreaView>
    );
};
const style= StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        flex: 1,
    },
    TitleText: {
        color: 'white',
        textAlign: 'left',
        fontSize: 18,
        paddingTop: 15,
        paddingLeft: 15,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    NameText: {
        fontSize: 27,
        color: 'white',
        paddingLeft: 25,
        paddingTop: 10,
    },
    ProgramText: {
        fontSize: 16,
        color: 'white',
        paddingLeft: 25,
    },
    Line: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 15,
        marginVertical: 15,
    },
    Text: {
        color: 'white',
        textAlign: 'left',
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: 'normal'
    },
    Citat: {
        color: '#A239FC',
        textAlign: 'right',
        fontSize: 18,
        width: 200,
        height: 'auto',
        alignSelf: 'flex-end',
        paddingRight: 20,
        fontStyle: 'italic'

    },
    BoldText: {
        color: 'white',
        textAlign: 'left',
        fontSize: 18,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    Arrow: {
        position: 'absolute',
        paddingTop: 80,
        paddingLeft: 80,
    },
});



export default (Faddrar);
