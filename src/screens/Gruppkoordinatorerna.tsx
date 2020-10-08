// The Gruppkoordinatorer screen shows all of the group coordinators.
// It's found under "Vi är mottagningen".

import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import TDHeader from '../components/TDHeader';
import { BlurView } from "@react-native-community/blur";
import CircleImage from '../components/CircleImage';
import TDFooter from '../components/TDFooter';
import gruppkoordinatorerna from '../static/images/Gruppkoordinatorerna'
import { GruppkoordinatorerText } from '../static/texts/Gruppkoordinatorer';

const Gruppkoordinatorerna = ({navigation}) => {
    const [fade, setFade]= useState ({
        fadeValue: new Animated.Value(0),
    });

    const BluredView = ({ hide }) => {
        if (hide)
            return (<BlurView
                        style={style.absolute}
                        blurType="dark"
                        blurAmount={10}
                        reducedTransparencyFallbackColor="white"
                    />);
        else
            return null;
    };

    const PicView = ({ hide }) => {
        if (hide)
            return (<View style={{  position: 'absolute', bottom:300, top: 50, alignSelf: 'center' }}>
                        <Animated.View style={[{paddingBottom: 30, }, {opacity: fade.fadeValue}]}>
                            <View style={{paddingLeft: 270}}>
                                <TouchableOpacity onPress={() => pressClose()}>
                                    <Image style={{ resizeMode:'contain', width: 20, height: 20}} source={require('./cross.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{alignSelf: 'center'}}>
                                <CircleImage img={show.url} radius={320} width={320}/>
                                <Text style={style.name}>
                                    {show.firstName} {show.lastName}{'\n'}<Text style={{...style.name, fontWeight: 'normal'}}>{show.longsort}</Text>
                                </Text>
                                <Text style={{...style.name, fontWeight: 'normal', fontStyle: 'italic', fontSize: 16 }}>
                                    "{show.quote}"
                                </Text>
                            </View>
                        </Animated.View>
                    </View>);
        else
            return null
    };

    const [show, setShow] = useState ({
    })

    const [blur, setBlur] = useState ({
        blur: false
    })

    const pressHandler = (item) => {
        Animated.timing(fade.fadeValue, {toValue: 1, duration: 100,  useNativeDriver: true,}).start();
        setShow(item)
        setBlur({
            blur: true
        })
    }

    const pressHandlerBack = () => {
        navigation.pop(1)
        return ;
    }
    const pressClose = () => {
        Animated.timing(fade.fadeValue, {toValue: 0, duration: 100,  useNativeDriver: true,}).start();
        setBlur({
            blur: false
        })
        return ;
    }
    return (
        <SafeAreaView style={style.background}>
            <TDHeader />
            <View style={style.background}>
                <FlatList
                    ListHeaderComponent={
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={style.title}>
                                    Gruppkoordinatorerna

                                </Text>
                            </View>
                            <View style={style.Line}/>
                            <Text style={style.Text} >
                                {GruppkoordinatorerText}
                            </Text>
                        </View>
                    }
                    ListFooterComponent={<View style={{ paddingBottom: 30 }}><TDFooter/></View>}
                    style={{paddingTop: 30}} numColumns = {3}
                    data={gruppkoordinatorerna}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => pressHandler(item)}
                                          style={{ width: '30%',
                                                   margin: '2.5%',
                                                   flex: 1, }}>
                            <CircleImage img={item.url} radius={100} width={100}/>
                            <Text style={style.NameText}>{item.firstName + ' ' + item.lastName}</Text>
                            <Text style={style.ProgramText}>{item.sort}</Text>
                        </TouchableOpacity>
                    )}
                />
                <BluredView hide={blur.blur}>
                </BluredView>


                <PicView hide={blur.blur}>
                </PicView>
            </View>

        </SafeAreaView>
    )};


const style = StyleSheet.create({
    background: {
        backgroundColor: '#342A3B',
        flex: 1,
    },
    title: {
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
    ProgramText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 14,
    },
    Padding: {
        padding: 20,
    },
    SortText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    FirstNameText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    Box: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 30,
    },
    Line: {
        borderBottomColor: '#9424F4',
        borderBottomWidth: 1,
        margin: 10,

    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    citat: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center',
        width: 300
    },
    NameText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    name: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
    }
});

export default (Gruppkoordinatorerna);
