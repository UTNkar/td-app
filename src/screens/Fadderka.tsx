// Fadderka is one of the "Vi är mottagningen" lists.
// It's found under "vi är mottagningen"

import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import TDHeader from '../components/TDHeader';
import TDFooter from '../components/TDFooter';
import CircleImage from '../components/CircleImage';
import Fadderkaiter from '../static/images/Fadderka/index.js';
import { FadderkaText } from '../static/texts/Fadderka';

const Fadderka = ({navigation}) => {

    return (<SafeAreaView style={style.background}>
                <TDHeader/>
                <View style={style.background}>
                    <FlatList
                        ListHeaderComponent={
                            <>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={style.TitleText}>Fadderkå</Text>
                                </View>
                                <View style={style.Line}/>
                                <Text style={style.Text} >
                                    {FadderkaText}
                                </Text>
                            </>
                        }
                        ListFooterComponent={<View style={{ paddingBottom: 30 }}><TDFooter/></View>}
                        style={{paddingTop: 10}}
                        numColumns = {3}
                        data={Fadderkaiter}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Fadderkait', item)}
                                              style={{ width: '30%',
                                                       height: 'auto',
                                                       margin: '2.5%',
                                                       flex: 1, }}>
                                <CircleImage img={item.url} radius={100} width={100}/>
                                <Text style={style.NameText}>{item.name}</Text>
                                <Text style={style.ProgramText}>{item.program}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </SafeAreaView>
           )};


const style = StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        flex: 1
    },
    NameText: {
        color: '#F365BB',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    Text: {
        color: 'white',
        textAlign: 'left',
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
    },
    Padding: {
        padding: 20,
    },
    ProgramText: {
        color: '#F365BB',
        textAlign: 'center',
        fontSize: 14,
    },
    FadderkaText: {
        color: '#F365BB',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    Box: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 30,
    },
    Line: {
        borderBottomColor: '#F365BB',
        borderBottomWidth: 1,
        margin: 10,
    },
    TitleText: {
        color: 'white',
        textAlign: 'left',
        fontSize: 27,
        paddingTop: 0,
        paddingLeft:25,
        lineHeight: 40,
        fontWeight: 'bold',
    },
});

export default (Fadderka);
