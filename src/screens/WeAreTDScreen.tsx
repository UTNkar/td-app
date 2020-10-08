import React from 'react';
import {
    Dimensions,
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
import {TDText} from './Texts/WeAreTD';
import Divider from '../components/Divider';
import WeAreTD from '../static/images/WeAreTD';

const WIDTH = Dimensions.get('window').width;

const WeAreTDScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={style.background}>
            <TDHeader/>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Text style={style.title}>
                            Vi är mottagningen
                        </Text>
                        <View style={style.line}>
                            <Divider color='#FFFFFF' width='100%' />
                        </View>
                        <Text style={style.text} >
                            {TDText}
                        </Text>
                    </View>
                }
                numColumns = {1}
                data={WeAreTD}
                renderItem={({item}) => (
                    <View style={style.box}>
                        <TouchableOpacity style={style.shadow} onPress={() => navigation.navigate(item.key)}>
                            <Image style={style.img}
                                   source={item.url} />
                        </TouchableOpacity>
                        <Text style={style.name}>{item.name}</Text>
                    </View>
                )}
                ListFooterComponent={TDFooter}
            />

        </SafeAreaView>
    )};

const style = StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        flex: 1,
    },
    img: {
        alignSelf: 'center',
        height: (WIDTH - 30) * 0.27,
        width: WIDTH - 30,
    },
    WeAreTDText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 30,
        fontWeight: "500",
        position: 'absolute',
        bottom: 0,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30,
        elevation: 10,
    },
    Text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    Name: {
        position: 'absolute',
        color: 'white',
        textAlign: 'left',
        fontSize: 30,
        bottom: '-10%',
        left: 10,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30
    },
    Padding: {
        padding: 20,
        paddingTop: 5,
    },
    Box: {
        position: 'absolute',
        top: '100%',
    },
    TDLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        margin: 10,
    },
    shadow: {
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    box: {
        paddingTop: 20,
        paddingBottom: 14
    },
    line: {
        margin: 15,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 27,
        paddingTop: 30,
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 15,
        marginRight: 15,
    },
    name: {
        color: 'white',
        fontSize: 18,
        marginLeft: 30,
        fontWeight: "500",
        position: 'absolute',
        bottom: 0,
       textShadowColor: '#000',
       textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30,
        elevation: 10,
    },
});

export default (WeAreTDScreen);
