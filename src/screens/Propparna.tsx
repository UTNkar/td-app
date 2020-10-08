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
import propparna from '../static/images/Proppar';
import { PropparText } from '../static/texts/Proppar';
import CircleImage from '../components/CircleImage';

const BluredView = (props) => {
    const { hide } = props;
    if (!hide) {
        return null;
    }
    return (
        <BlurView
            style={style.absolute}
            blurType="dark"
            blurAmount={10}

     reducedTransparencyFallbackColor="white"

        />
    );
};

const Propparna = ({navigation}) => {
    const [fade, setFade]= useState ({
        fadeValue: new Animated.Value(0),
    });

    const [show, setShow] = useState ({
    })

    const [blur, setBlur] = useState ({
        blur: false
    })

    const pressHandler = (item) => {
        Animated.timing(fade.fadeValue, {toValue: 1, duration: 100,  useNativeDriver: true,}).start();
        setShow({
            pic: item.url, class:item.class, firstName: item.firstName, lastName: item.lastName, quote: item.quote
        })
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
                                <CircleImage img={show.pic} radius={320} width={320}/>
                                <Text style={style.name}>
                                    {show.firstName} {show.lastName}, {show.class}
                                </Text>
                            </View>
                        </Animated.View>
                    </View>);
        else
            return null
    };

    return (
        <SafeAreaView style={style.background}>
            <TDHeader />
            <View style={style.background}>
                <FlatList
                    ListHeaderComponent={
                        <View style={{ marginTop: 20 }}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={style.RekaText}>Propparna</Text>
                            </View>
                            <View style={style.MediakaLine}/>
                            <Text style={style.Text} >
                                {PropparText}
                            </Text>
                        </View>
                    }
                    numColumns = {3}
                    data={propparna}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => pressHandler(item)}
                                          style={{ flex: 1, width: '30%', margin: '2.5%' }}>
                            <CircleImage img={item.url} radius={100} width={100}/>
                            <Text style={style.MediakaText}>{item.firstName}</Text>
                            <Text style={style.ProgramText}>{item.class}</Text>
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
    RekaText: {
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
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 17,
    },
    MediakaText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: 'bold',
    },
    MediakaLine: {
        borderBottomColor: 'black',
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
    name: {
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 17,
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
    }
});

export default React.memo(Propparna, () => true);
