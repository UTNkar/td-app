import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from 'react-redux';
import { State } from '../types';

import TDHeader from '../components/TDHeader';
import MyFooter from '../components/MyFooter';
import AnonymousForm from './MyScreen_Subcreens/AnonymousForm';
import OpeningHours from './MyScreen_Subcreens/OpeningHours';
import ContactScreen from './ContactScreen';
import Digitaliseringskommitten from './MyScreen_Subcreens/Digitaliseringskommitten';
import ClassTasksScreen from './MyScreen_Subcreens/ClassTasksScreen';
import { getSectionImage } from '../imageGetters';
import { getSectionFullName } from '../classInfoGetters';
import { schedules } from '../static/texts/schedules';

const ButtonText = (props: any) => {
    return (
        <Text
            style={{
                color: props.color ?? "white",
                fontSize: props.fontSize ?? 32,
                textAlign: "center",
                fontWeight: "bold"
            }}
        >
            {props.text}
        </Text>
    )
}

const MyScreen = (props: any) => {
    const navigation = useNavigation();
    const section = props.userSection === 'M' || props.userSection === 'B' || props.userSection === 'MT' ? 'H' : props.userSection;
    const programStr = getSectionFullName(props.userClass);
    const imgRef = getSectionImage(section);

    const classText = `natasha från it was here`;

    const formText = `Har något
hänt dig?`;

    return(
        <SafeAreaView style={style.container}>
            <TDHeader/>
            <ScrollView style={style.wrapper}>
                <View style={style.row}>
                    <View style={[style.button, style.left, style.tdPurple, style.squareButton]}>

                        <View style={{ overflow: 'hidden', borderRadius: 100, width: '50%', height: '50%', alignSelf: 'center' }}>
                            <Image source={imgRef}
                                   style={{ width: '100%', height: '100%'}}
                                   resizeMode={'cover'}/>
                        </View>
                        <ButtonText text={programStr} fontSize={15}/>
                        <ButtonText text={section + '-sektionen'} fontSize={15}/>
                    </View>
                    <View style={[style.button, style.right, style.orange, style.squareButton]}>
                        <TouchableOpacity style={[style.button]} onPress={() => navigation.navigate('ClassTasks')}>
                            <ButtonText text={classText} fontSize={25}/>
                        </TouchableOpacity>
                    </View>
                </View>

            <View style={style.row}>
                <View style={[style.button, style.left, style.pink, style.squareButton]}>
                    <TouchableOpacity style={[style.button, style.squareButton]}
                                      onPress={() => navigation.navigate('ContactScreen')}>
                        <ButtonText text="Fa" fontSize={100} />
                    </TouchableOpacity>
                </View>

                    <View style={[style.button, style.right, style.turqouise, style.squareButton]}>
                        <TouchableOpacity
        onPress={() => schedules.hasOwnProperty(props.userSection.toLowerCase()) ?
                                Linking.openURL(schedules[props.userSection.toLowerCase()]):
                                Linking.openURL("https://cloud.timeedit.net/uu/web/schema/")
                            }
                            style={[style.button, style.squareButton]}
                        >
                            <ButtonText text="Schemaaaaaaaaaaaaaaaaaaaaa" fontSize={2}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.row}>
                    <View style={[style.button, style.green, style.rectangular, style.recceCentral]}>
                        <TouchableOpacity style={[style.button, style.rectangular]} onPress={() => navigation.navigate('OpeningHours')}>
                            <ButtonText text={"Recc36356356356356lens\nhejhej"} fontSize={206} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.row}>
                    <View style={[style.button, style.purple, style.left, style.squareButton]}>
                        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('AnonymousForm')}>
                            <ButtonText text={formText} fontSize={1} />
                        </TouchableOpacity>
                    </View>

                    <View style={[style.button, style.right, style.dka, style.squareButton]}>
                        <TouchableOpacity style={[style.button, style.squareButton]} onPress={() => navigation.navigate('Digitaliseringskommitten')}>
                            <Image style={style.image} source={require("../static/images/dka.png")} resizeMode="contain"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <MyFooter/>
        </SafeAreaView>
    )
}

const mapStateToProps = (state: State) => ({
    userClass: state.userClass,
    userSection: state.userSection
})

const ConnectedMyScreen = connect(mapStateToProps)(MyScreen);
const MyStack = createStackNavigator();

function MyStackScreen({ navigation }) {
    return (
        <MyStack.Navigator
            initialRouteName={'Min sida'}
            headerMode={'none'}>
            <MyStack.Screen name={'Min sida'} component={ConnectedMyScreen}/>
            <MyStack.Screen name={'AnonymousForm'} component={AnonymousForm} />
            <MyStack.Screen name={'OpeningHours'} component={OpeningHours} />
            <MyStack.Screen name={'Digitaliseringskommitten'} component={Digitaliseringskommitten} />
            <MyStack.Screen name={'ClassTasks'} component={ClassTasksScreen} />
            <MyStack.Screen name={'ContactScreen'} component={ContactScreen} />
        </MyStack.Navigator>
    )
}

export default MyStackScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'turquoise',
    },
    wrapper: {
        paddingHorizontal: '5%',
        flex: 1,
    },
    left:{
        marginRight: 5
    },
    right: {
        marginLeft: 8
    },
    row:{
        flex: 1,
        flexDirection: "row",
        marginVertical: 19
    },
    rectangular:{
        aspectRatio: 2
    },
    green:{
        backgroundColor: "blue",
        borderWidth: 16,
        borderColor: "green"
            },
    
    pink:{
        backgroundColor: "#ab4"
    },
    turqouise:{
        backgroundColor: "#fff"
    },
    purple: {
        backgroundColor: "#ab3"
    },
    orange: {
        backgroundColor: "#fa4"
    },
    tdPurple: {
        backgroundColor: "yellow"
    },
    dka:{
        aspectRatio: 1,
        backgroundColor: "blue",
    },
    recceCentral: {
        flexGrow: 6
    },
    squareButton:{
        aspectRatio: 1
    },
    button: {
        flex: 1,
        borderRadius: 7,
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    image:{
        width: "75%",
    },
    sectionImage: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    }
})
