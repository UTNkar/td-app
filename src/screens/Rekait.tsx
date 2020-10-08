import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import TDHeader from '..//components/TDHeader';
import TDFooter from '..//components/TDFooter';

const Rekait = (props) => {
    const pressHandlerBack = () => {
        props.navigation.pop(1)
        return ;
    }

    return (
        <SafeAreaView style={style.background}>
            <TDHeader />
            <ScrollView style={{paddingBottom: "100%"}}>
            <View style={{ height: 300 }}>
            <Image style={{ width: '100%', height: '100%' }} resizeMode={'cover'} source={props.route.params.pic} />
                </View>
                <Text style={style.NameText}>
                    {props.route.params.name}
                </Text>
                <Text style={style.ProgramText}>
                    {props.route.params.longProgram}
                </Text>
                <View style={style.Line}/>
                <Text style={style.Text}>
                    {props.route.params.text}
                </Text>
                <Text style={style.Citat}>
                    "{props.route.params.quote}"
                </Text>
                <Text style={style.BoldText}>
                    Bjud mig på:
                    <Text style={style.Text}>
                        <Text>
                            {" "}
                        </Text>
                        {props.route.params.give}
                    </Text>
                </Text>
                <TDFooter/>
            </ScrollView>
        </SafeAreaView>
    );
};
const style= StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        flex: 1,
    },
    NameText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 22,
        paddingLeft: 15,
        paddingTop: 10,
    },
    ProgramText: {
        fontSize: 14,
        color: 'white',
        paddingLeft: 15,
        paddingBottom: 10,
        lineHeight: 22,
    },
    Line: {
        borderColor: '#A744FC',
        borderBottomWidth: 1,
        marginVertical: 0,
        width: '95%',
        alignSelf: 'center'
    },
    Text: {
        color: 'white',
        textAlign: 'left',
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        fontWeight: 'normal'
    },
    Citat: {
        color: '#A239FC',
        textAlign: 'center',
        fontSize: 14,
        height: 'auto',
        alignSelf: 'center',
        width: '80%',
        fontStyle: 'italic',
        paddingVertical: 20,
    },
    BoldText: {
        color: 'white',
        textAlign: 'left',
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
});



export default (Rekait);
