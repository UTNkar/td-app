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
import TDFooter from '../components/TDFooter';
import TDHeader from '../components/TDHeader';
import {MediakaText} from '../static/texts/Mediaka';
import Mediakaiter from '../static/images/Mediaka'
import CircleImage from '../components/CircleImage';

const Mediaka = ({navigation}) => {
    return (
        <SafeAreaView style={style.background}>
            <TDHeader />
            <View style={style.background}>
                <FlatList
                    ListHeaderComponent={
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={style.TitleText}>
                                    Mediakå
                                </Text>
                            </View>
                            <View style={style.Line}/>
                            <Text style={style.Text} >
                                {MediakaText}
                            </Text>
                        </View>
                    }
                    ListFooterComponent={<View style={{ paddingBottom: 30 }}><TDFooter/></View>}
                    style={{paddingTop: 30}} numColumns = {3}
                    data={Mediakaiter}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Mediakait', item)}
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
        flex: 1,
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
        color: '#15B700',
        textAlign: 'center',
        fontSize: 14,
    },
    NameText: {
        color: '#15B700',
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
        borderBottomColor: '#15B700',
        borderBottomWidth: 1,
        margin: 10,

    }
});

export default (Mediaka);
