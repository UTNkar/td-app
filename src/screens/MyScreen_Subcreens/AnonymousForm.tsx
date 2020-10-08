import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Button, Linking } from 'react-native';
import TDHeader from '../../components/TDHeader';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import TDFooter from '../../components/TDFooter';

const AnonymousForm = () => {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSfp4MJTJduFYAzNZCppscGm4s09vjxPXU1MDrRxRAPYuHBO2g/viewform';
    const textBold =    "Mottagningen accepterar ingen form av sexuella trakasserier. " +
                        "Om du har blivit utsatt för en incident kommer vi, med din tillåtelse, " +
                        "hjälpa dig att göra en polisanmälan."
    const text =    "Mottagningen ska vara en plats där alla kan känna sig trygga. " +
                    "Därför behöver vi er hjälp för att rapportera in sånt som inte är okej " +
                    "så att vi kan lösa problemet direkt eller förebygga det. Det spelar ingen " +
                    "roll om du är Recce, Fadder eller Volontär - alla har rätt att känna sig lika trygga!\n\n"+
                    "Har du blivit illa behandlad, blivit kränkt eller trakasserad av någon eller något? Anmäl det här!\n" +
                    "Har du skadat dig under eller i anslutning till mottagningsverksamheten eller mottagningsområdet? Anmäl det här!\n" +
                    "Har du upptäckt något som potentiellt kan vara en fara för andra eller som får dig att känna dig otrygg? " + 
                    "(t.ex trasig utrustning eller lokal, brandfarliga lösningar eller bristande rutiner) Anmäl det här!\n\n" +
                    "Du kan anmäla sådant som hänt och sådant som du tror det finns risk för att det kan hända. " +
                    "Du kan anmäla sådant som hänt dig eller sådant som hänt andra. Formuläret är helt anonymt " +
                    "men det finns möjlighet att lämna kontaktuppgifter ifall man vill bli kontaktad av en mottagningsengagerad för uppföljning."

    return(
        <SafeAreaView style={style.background}>
            <TDHeader/>
            <View style={style.wrapper}>
                <View style={style.container}>
                    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                        <Text style={style.title}>Har något hänt dig?</Text>
                        <Text style={style.textBold}>{textBold}</Text>
                        <Text style={style.text}>{text}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(url)}>
                            <View style={style.button}>
                                <Text style={style.buttonText}>Anonymt formulär</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <TDFooter/>
        </SafeAreaView>
    )
}
export default AnonymousForm;

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#342A3B',
        padding: '4%'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#9424F4',
        padding: '5%',
        alignItems: 'center',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 23,
        color: 'white'
    },
    text: {
        fontSize: 14,
        color: 'white',
        marginVertical: '5%'
    },
    textBold: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginVertical: '5%'
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 120,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 13,
        color: 'black',
    }
})
