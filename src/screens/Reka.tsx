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
import TDHeader from '..//components/TDHeader';
import TDFooter from '../components/TDFooter';
import Rekaiter from '../static/images/Reka';
import CircleImage from '../components/CircleImage';
import { RekaText } from '../static/texts/reka/rkTexts'

const Reka = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor: '#342A3B' }}>
            <TDHeader />
            <FlatList
                ListHeaderComponent={
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style.TitleText}>
                                Rekå
                            </Text>
                        </View>
                        <View style={style.Line}/>
                        <Text style={style.Text} >
                            {RekaText}
                        </Text>
                    </View>

                }

                ListFooterComponent={<View style={{ paddingBottom: 30 }}><TDFooter/></View>}
                style={{ paddingTop: 30, paddingBottom: 30 }}
                numColumns = {3}
                data={Rekaiter}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Rekait', item)}
                                      style={{ width: '30%',
                                               margin: '2.5%',
                                               flex: 1, }}>
                        <CircleImage img={item.url} radius={100} width={100}/>
                        <Text style={style.NameText}>{item.name}</Text>
                        <Text style={style.ProgramText}>{item.program}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )};


const style = StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        flex:1,
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
        color: '#A744FC',
        textAlign: 'center',
        fontSize: 14,
    },
    NameText: {
        color: '#A744FC',
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
        borderBottomColor: '#A744FC',
        borderBottomWidth: 1,
        margin: 10,

    }
});

export default (Reka);
