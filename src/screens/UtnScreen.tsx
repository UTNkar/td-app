import React from 'react';
import { Dimensions,
         Image,
         View,
         StyleSheet,
         ScrollView,
         SafeAreaView,
         Text,
         TouchableOpacity,
         Linking } from 'react-native';
import TDHeader from '../components/TDHeader';
import TDFooter from '../components/TDFooter';
import Divider from '../components/Divider';
import UtnImages from '../static/images/info/utn/';
import { utnText } from '../static/texts/utnText';

const WIDTH = Dimensions.get('window').width;
const HeaderImage = ({ source }) => (<Image source={source}
                                            style={style.headerImage}
                                     />)
const IconImage = ({ source }) => (<Image source={source}
                                          style={style.icon}
                                          resizeMode="contain"
                                   />)
const urlUTN = utnText["urlUTN"];
const urlBM = utnText["urlBM"];
const urlInstagram = utnText["urlInstagram"];
const urlFacebook = utnText["urlFacebook"];
const urlPlace = utnText["urlPlace"];
const urlMail = utnText["urlMail"];
const infoText = utnText["infoText"];

const UtnScreen = ({ navigation }) => {
    return(
        <SafeAreaView style = {style.safeContainer}>
            <TDHeader/>
            <View style={style.container}>
                <ScrollView style={style.scroller}>
                    <HeaderImage source={UtnImages['UTHGARD']}/>
                    <View style={style.top}>
                        <View>
                            <Text style={style.title}>Om UTN</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(urlUTN)}>
                                <Text style={style.subtitle}>www.utn.se</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.social}>
                            <TouchableOpacity onPress={() => Linking.openURL(urlInstagram)}>
                                <IconImage source={UtnImages['INSTAGRAM']}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL(urlFacebook)}>
                                <IconImage source={UtnImages['FACEBOOK']}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL(urlPlace)}>
                                <IconImage source={UtnImages['PLACE']}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL(urlMail)}>
                                <IconImage source={UtnImages['MAIL']}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Divider color={ 'white' } width={WIDTH-30}/>
                    <Text style={style.infoText}>
                        {infoText}
                    </Text>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => Linking.openURL(urlBM)}>
                        <Text style={style.buttonText}>Bli medlem</Text>
                    </TouchableOpacity>
                    <TDFooter/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default UtnScreen
const style = StyleSheet .create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    container: {
        flex: 1,
        backgroundColor: '#342A3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroller:{
        flex:1
    },
    headerImage:{
        height: WIDTH*0.69,
        width: WIDTH,
    },
    top:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    title:{
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle:{
        marginTop: 15,
        fontSize: 16,
        color: 'white',
        fontStyle: 'italic',
        marginTop: 0,
    },
    social:{
        flexDirection: 'row',
    },
    icon:{
        height: 30,
        width: 30,
        marginLeft: 13,
        marginTop: 10,
    },
    infoText: {
        color: 'white',
        margin: 15,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#084798',
        width: 140,
        height: 43,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowRadius: 10,
        margin: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    }
});
